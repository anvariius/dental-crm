import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table.tsx";
import { ArrowDownWideNarrow, ArrowUpWideNarrow } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { Patient, TableField } from "@/components/patients/types.ts";
import { useEffect, useState } from "react";
import PatientsTableDropdown from "@/components/patients/PatientsTableDropdown.tsx";

export function PatientsTable({ patientsList }: { patientsList: Patient[] }) {
  const tableFields: TableField[] = [
    { name: "id", title: "ID", sortable: true },
    { name: "name", title: "Имя", sortable: true },
    { name: "phone", title: "Телефон", sortable: false },
    { name: "birthday", title: "Дата рождения", sortable: false },
  ];

  const directionItems = {
    asc: {
      icon: <ArrowDownWideNarrow />,
      sortMethod: (p1: Patient, p2: Patient) => {
        // @ts-ignore
        if (p1[sortBy.field] > p2[sortBy.field]) return 1;
        // @ts-ignore
        if (p1[sortBy.field] < p2[sortBy.field]) return -1;
        return 0;
      },
    },
    desc: {
      icon: <ArrowUpWideNarrow />,
      sortMethod: (p1: Patient, p2: Patient) => {
        // @ts-ignore
        if (p1[sortBy.field] < p2[sortBy.field]) return 1;
        // @ts-ignore
        if (p1[sortBy.field] > p2[sortBy.field]) return -1;
        return 0;
      },
    },
  };

  type SortDirections = "asc" | "desc";
  type SortByType = {
    field: keyof Patient;
    direction: SortDirections;
  };
  const initialSortBy: SortByType = {
    field: "id",
    direction: "desc",
  };
  const [sortBy, setSortBy] = useState<SortByType>(initialSortBy);

  const [sortedPatients, setSortedPatients] = useState<Patient[]>([]);

  useEffect(() => {
    const patientsToSort = [...patientsList];
    // if (JSON.stringify(sortBy) === JSON.stringify(initialSortBy)) {
    //   return setSortedPatients(patientsToSort);
    // }
    patientsToSort.sort((p1, p2) => {
      return directionItems[sortBy.direction].sortMethod(p1, p2);
    });
    setSortedPatients(patientsToSort);
  }, [patientsList, sortBy]);

  const handleSortChange = (field: keyof Patient) => {
    if (field !== sortBy.field) {
      setSortBy({ ...initialSortBy, field });
    } else {
      setSortBy({
        field,
        direction: sortBy.direction === "asc" ? "desc" : "asc",
      });
    }
  };
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            {tableFields.map((field) => (
              <TableHead key={field.name}>
                <Button
                  variant="ghost"
                  className={
                    sortBy.field === field.name ? "bg-slate-100 text-black" : ""
                  }
                  onClick={() => field.sortable && handleSortChange(field.name)}
                >
                  {sortBy.field === field.name &&
                    directionItems[sortBy.direction].icon}
                  {field.title}
                </Button>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedPatients.length ? (
            <>
              {sortedPatients.map((patient) => (
                <TableRow key={patient.id}>
                  {tableFields.map((f) => (
                    <TableCell key={f.name + patient.id}>
                      {patient[f.name]?.toString().length
                        ? patient[f.name]
                        : "––––––"}
                    </TableCell>
                  ))}
                  <TableCell>
                    <PatientsTableDropdown>
                      {patient.name}
                    </PatientsTableDropdown>
                  </TableCell>
                </TableRow>
              ))}
            </>
          ) : (
            <TableRow>
              <TableCell colSpan={tableFields.length} className="text-center">
                Пациенты не найдены
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
