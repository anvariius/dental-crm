import { useGetPatientsQuery } from "@/components/patients/patiens.slice.ts";
import { SearchInput } from "@/components/patients/SearchInput.tsx";
import { useEffect, useState } from "react";
import { PatientsTable } from "@/components/patients/PatientsTable.tsx";
import Fuse from "fuse.js";
import { Patient } from "@/components/patients/types.ts";
import { Button } from "@/components/ui/button.tsx";

export function PatientsPage() {
  const { data: patientsList } = useGetPatientsQuery();
  const [fuse, setFuse] = useState<Fuse<Patient> | null>(null);
  const [patientsToShow, setPatientsToShow] = useState<Patient[]>([]);

  useEffect(() => {
    if (!patientsList) return;

    const newFuse = new Fuse<Patient>(patientsList, {
      minMatchCharLength: 3,
      keys: ["name", "phone", "email"],
    });
    setFuse(newFuse);

    setPatientsToShow(patientsList);
  }, [patientsList]);

  const handleSearchInputChange = (value: string) => {
    if (!fuse || !patientsList) return;
    value.trim() === ""
      ? setPatientsToShow(patientsList)
      : setPatientsToShow(fuse.search(value).map((p) => p.item));
  };
  return (
    patientsList && (
      <>
        <div className="flex justify-between mb-12">
          <div className="text-2xl font-semibold">Список пациентов</div>
        </div>
        <div className="flex justify-between mb-5">
          <SearchInput onChange={handleSearchInputChange} />
          <Button>Добавить пациента</Button>
        </div>
        <div>
          <PatientsTable patientsList={patientsToShow} />
        </div>
      </>
    )
  );
}
