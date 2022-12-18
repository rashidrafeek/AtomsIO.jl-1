var documenterSearchIndex = {"docs":
[{"location":"apireference/","page":"API reference","title":"API reference","text":"CurrentModule = AtomsIO","category":"page"},{"location":"apireference/#API-reference","page":"API reference","title":"API reference","text":"","category":"section"},{"location":"apireference/","page":"API reference","title":"API reference","text":"Modules = [AtomsIO]","category":"page"},{"location":"apireference/#AtomsIO.AseParser","page":"API reference","title":"AtomsIO.AseParser","text":"Parse or write files using the Atomistic Simulation Environment (ASE) via ASEconvert.\n\n\n\n\n\n","category":"type"},{"location":"apireference/#AtomsIO.ChemfilesParser","page":"API reference","title":"AtomsIO.ChemfilesParser","text":"Parse or write file using Chemfiles.\n\n\n\n\n\n","category":"type"},{"location":"apireference/#AtomsIO.ExtxyzParser","page":"API reference","title":"AtomsIO.ExtxyzParser","text":"Parse or write file using ExtXYZ\n\n\n\n\n\n","category":"type"},{"location":"apireference/#AtomsIO.load_system","page":"API reference","title":"AtomsIO.load_system","text":"load_system([parser], file::AbstractString; kwargs...)\nload_system([parser], file::AbstractString, index; kwargs...)\n\nRead an AtomsBase-compatible system from file. If file contains more than one structure the last entry is returned. If index is specified this indexes into the list of structures and returns the respective system.\n\nBy default AtomsIO picks an appropriate parser for the specified file format automatically. A specific parser (such as ExtxyzParser or AseParser) can be enforced by using it as the first argument. Some parsers support additional keyword arguments. E.g. AseParser supports the format argument to overwrite the ASE-internal selection of an input / output format.\n\n\n\n\n\n","category":"function"},{"location":"apireference/#AtomsIO.load_trajectory-Tuple{AbstractString}","page":"API reference","title":"AtomsIO.load_trajectory","text":"load_trajectory([parser], file::AbstractString; kwargs...)\n\nRead a trajectory from a file and return a vector of AtomsBase-compatible structures. Providing a parser overwrites the automatic AtomsIO selection.\n\n\n\n\n\n","category":"method"},{"location":"apireference/#AtomsIO.save_system-Tuple{AbstractString, AbstractSystem}","page":"API reference","title":"AtomsIO.save_system","text":"save_system([parser], file::AbstractString, system::AbstractSystem; kwargs...)\n\nSave an AtomsBase-compatible system to the file. By default AtomsIO picks an appropriate parser for the specified file format automatically. A specific parser (such as ExtxyzParser or AseParser) can be enforced by using it as the first argument. Some parsers support additional keyword arguments. E.g. AseParser supports the format argument to overwrite the ASE-internal selection of an input / output format.\n\n\n\n\n\n","category":"method"},{"location":"apireference/#AtomsIO.save_trajectory-Tuple{AbstractString, AbstractVector{<:AbstractSystem}}","page":"API reference","title":"AtomsIO.save_trajectory","text":"save_trajectory([parser], file::AbstractString, systems::AbstractVector; kwargs...)\n\nSave a trajectory given as a list of AtomsBase-compatible systems to a file. Providing a parser overwrites the automatic AtomsIO selection.\n\n\n\n\n\n","category":"method"},{"location":"#AtomsIO","page":"Home","title":"AtomsIO","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Standard package for reading and writing atomic structures represented as an AtomsBase-compatible data structure. AtomsIO currently integrates with","category":"page"},{"location":"","page":"Home","title":"Home","text":"Chemfiles\nExtXYZ\nASEconvert (respectively ASE)","category":"page"},{"location":"","page":"Home","title":"Home","text":"and supports all file formats any of these packages support. The best-matching backend for reading / writing is automatically chosen.","category":"page"},{"location":"","page":"Home","title":"Home","text":"note: Note\nUnfortunately atomistic file formats are usually horribly underspecified and generally not all details are supported in all formats. Common examples are that some file formats are unable to store velocity information, others only work for non-periodic systems etc. Therefore even though we try to be careful, it frequently happens that some information is lost when writing a system to disk. An additional caveat is that the way how particular atomistic properties are mapped to individual data fields of a file format is not standardised amongst parser libraries. To recover a system as closely as possible, it is thus advisable to choose the same parser library for writing and reading a file. AtomsIO does this by default.","category":"page"},{"location":"","page":"Home","title":"Home","text":"tip: Tip\nFor the reasons mentioned above the authors of AtomsIO recommend using extended XYZ format via the ExtxyzParser for long-term storage. This format and parser has a well-documented specification and moreover leads to a human-readable plain-text file. If you have a different opinion we are happy to hear about it. Please open an issue for discussion.","category":"page"},{"location":"#Usage-example","page":"Home","title":"Usage example","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"using AtomsIO\n\n# Load system from a cif file ... by default uses ASE.\n# Returns an AtomsBase-compatible system.\nsystem = load_system(\"Si.cif\")\n\n# The system can now be used with any package supporting AtomsBase,\n# e.g. display unit cell, positions and chemical formula ...\n@show bounding_box(system)\n@show position(system)\n@show chemical_formula(system)\n\n# ... or do a DFT calculation using DFTK.\nusing DFTK\nmodel  = model_LDA(system)\nbasis  = PlaneWaveBasis(model; Ecut=15, kgrid=(3, 3, 3))\nscfres = self_consistent_field(basis);\n\n# We could also load a whole trajectory (as a list of systems):\ntrajectory = load_trajectory(\"mdrun.traj\")\n\n# ... or only the 6-th structure:\nlast_system = load_system(\"mdrun.traj\", 6)","category":"page"}]
}
