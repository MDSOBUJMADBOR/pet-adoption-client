"use client";

import { useEffect, useState } from "react";
import PetCard from "@/components/PetCard";
import { getAllPets } from "@/lib/pets/data";

import { Button, Dropdown, Label, SearchField } from "@heroui/react";

const Featured = () => {

  
  const [courses, setCourses] = useState([]);

  const [search, setSearch] = useState("");
  const [speciesFilter, setSpeciesFilter] = useState("all");

  // ✅ Default = Low → High
  const [sortBy, setSortBy] = useState("low-high");

  // Load data
  useEffect(() => {
    const loadPets = async () => {
      const data = await getAllPets();
      setCourses(data);
    };
    loadPets();
  }, []);

  // ✅ FULL FILTER + SORT FLOW (FIXED)
  let filteredPets = [...courses];

  // 🔍 SEARCH (by petName)
  filteredPets = filteredPets.filter((pet) =>
    search.trim() === ""
      ? true
      : pet.petName?.toLowerCase().includes(search.toLowerCase())
  );

  // 🐶 SPECIES FILTER
  filteredPets = filteredPets.filter((pet) =>
    speciesFilter === "all"
      ? true
      : pet.species === speciesFilter
  );

  // 💰 SORT (FIXED & SAFE)
  filteredPets.sort((a, b) => {
    const feeA = Number(a.fee || a.price) || 0;
    const feeB = Number(b.fee || b.price) || 0;

    if (sortBy === "low-high") return feeA - feeB;
    if (sortBy === "high-low") return feeB - feeA;

    return 0;
  });

  return (
    <div className="px-10 py-10">

      {/* TITLE */}
      <h1 className="font-bold text-3xl mb-6">All Pets</h1>

      {/* FILTER BAR */}
      <div className="flex justify-between items-center flex-wrap gap-6 mb-8">

        {/* SEARCH */}
        <div>
          <SearchField name="search">
            <Label>Search Pets</Label>

            <SearchField.Group>
              <SearchField.SearchIcon />

              <SearchField.Input
                className="w-[280px]"
                placeholder="Search by name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <SearchField.ClearButton />
            </SearchField.Group> 
          </SearchField>
        </div>

        {/* SPECIES FILTER */}
        <div>
          <h1 className="text-gray-400 text-lg mb-2">
            Filter by species 
          </h1>

          <Dropdown>
            <Button variant="outline" className="rounded-lg">
              {speciesFilter === "all" ? "All Species" : speciesFilter}
            </Button>

            <Dropdown.Popover>
              <Dropdown.Menu onAction={(key) => setSpeciesFilter(key)}>
                <Dropdown.Item id="all">
                  <Label>All</Label>
                </Dropdown.Item>

                <Dropdown.Item id="Dog">
                  <Label>Dog</Label>
                </Dropdown.Item>

                <Dropdown.Item id="Cat">
                  <Label>Cat</Label>
                </Dropdown.Item>

                <Dropdown.Item id="Bird">
                  <Label>Bird</Label>
                </Dropdown.Item>

                <Dropdown.Item id="Fish">   
                  <Label>Fish</Label>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Popover>
          </Dropdown>
        </div>

        {/* SORT */}
        <div>
          <h1 className="text-gray-400 text-lg mb-2">
            Sort by fee
          </h1>

          <Dropdown>
            <Button variant="outline" className="rounded-lg">
              {sortBy === "low-high"
                ? "Fee: Low to High"
                : sortBy === "high-low"
                ? "Fee: High to Low"
                : "Sort"}
            </Button>

            <Dropdown.Popover>
              <Dropdown.Menu onAction={(key) => setSortBy(key)}>
                <Dropdown.Item id="low-high">
                  <Label>Fee: Low to High</Label>
                </Dropdown.Item>

                <Dropdown.Item id="high-low">
                  <Label>Fee: High to Low</Label>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Popover>
          </Dropdown>
        </div>

      </div>

      {/* PET GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {filteredPets.length === 0 ? (
          <p className="text-center text-gray-500 col-span-3">
            No pets found 🐾
          </p>
        ) : (
          filteredPets.map((pet) => (
            <PetCard key={pet._id} course={pet} />
          ))
        )}

      </div>






    </div>
  );
};

export default Featured;


