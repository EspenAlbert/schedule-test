# cloud_user/clouduserteamassignment/TestAccCloudUserTeamAssignment_basic Test Details
# Found 34 TestRuns in dev, qa from 2025-09-10 to 2025-10-02 from master branch: 1 unique tests, PASS(x 32) FAIL(x 2)
Success rate: 94.12%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-11 00:27](#error-2025-09-11t0027300000) |  | dev | 5.02s
[2025-09-12 00:27](#error-2025-09-12t0027250000) |  | dev | 5.03s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03: MISSING
- 2025-09-04: MISSING
- 2025-09-05: MISSING
- 2025-09-06: MISSING
- 2025-09-07: MISSING
- 2025-09-08: MISSING
- 2025-09-09: MISSING
- 2025-09-10 PASS 3 seconds
- 2025-09-11

### Error 2025-09-11T00:27:30+00:00
```
2025-09-11T00:27:30.9923340Z === RUN   TestAccCloudUserTeamAssignment_basic
2025-09-11T00:27:30.9940143Z   
2025-09-11T00:27:30.9941103Z     resource_test.go:20: Step 2/3 error running import: ImportStateVerify attributes not equivalent. Difference is shown below. The - symbol indicates attributes missing after import.
2025-09-11T00:27:30.9941864Z         
2025-09-11T00:27:30.9942175Z           map[string]string{
2025-09-11T00:27:30.9942596Z         - 	"roles.project_role_assignments.#":                  "8",
2025-09-11T00:27:30.9943188Z         + 	"roles.project_role_assignments.#":                  "13",
2025-09-11T00:27:30.9943763Z         + 	"roles.project_role_assignments.10.%":               "2",
2025-09-11T00:27:30.9944458Z         + 	"roles.project_role_assignments.10.project_id":      "68c2175c481f4178129b4df9",
2025-09-11T00:27:30.9945047Z         + 	"roles.project_role_assignments.10.project_roles.#": "1",
2025-09-11T00:27:30.9945705Z         + 	"roles.project_role_assignments.10.project_roles.0": "GROUP_OWNER",
2025-09-11T00:27:30.9946342Z         + 	"roles.project_role_assignments.11.%":               "2",
2025-09-11T00:27:30.9947038Z         + 	"roles.project_role_assignments.11.project_id":      "68c2175c4e35e91a1b2b5659",
2025-09-11T00:27:30.9947814Z         + 	"roles.project_role_assignments.11.project_roles.#": "1",
2025-09-11T00:27:30.9948470Z         + 	"roles.project_role_assignments.11.project_roles.0": "GROUP_OWNER",
2025-09-11T00:27:30.9949075Z         + 	"roles.project_role_assignments.12.%":               "2",
2025-09-11T00:27:30.9949666Z         + 	"roles.project_role_assignments.12.project_id":      "68c2175c4e35e91a1b2b565e",
2025-09-11T00:27:30.9950327Z         + 	"roles.project_role_assignments.12.project_roles.#": "1",
2025-09-11T00:27:30.9951104Z         + 	"roles.project_role_assignments.12.project_roles.0": "GROUP_OWNER",
2025-09-11T00:27:30.9951744Z         + 	"roles.project_role_assignments.8.%":                "2",
2025-09-11T00:27:30.9952432Z         + 	"roles.project_role_assignments.8.project_id":       "68c2175c481f4178129b4b48",
2025-09-11T00:27:30.9953005Z         + 	"roles.project_role_assignments.8.project_roles.#":  "1",
2025-09-11T00:27:30.9953814Z         + 	"roles.project_role_assignments.8.project_roles.0":  "GROUP_OWNER",
2025-09-11T00:27:30.9954346Z         + 	"roles.project_role_assignments.9.%":                "2",
2025-09-11T00:27:30.9955045Z         + 	"roles.project_role_assignments.9.project_id":       "68c2175c481f4178129b4c91",
2025-09-11T00:27:30.9955611Z         + 	"roles.project_role_assignments.9.project_roles.#":  "1",
2025-09-11T00:27:30.9956147Z         + 	"roles.project_role_assignments.9.project_roles.0":  "GROUP_OWNER",
2025-09-11T00:27:30.9956507Z           }
2025-09-11T00:27:30.9956798Z --- FAIL: TestAccCloudUserTeamAssignment_basic (5.24s)
```

- 2025-09-12
  - FAIL 5 seconds

### Error 2025-09-12T00:27:25+00:00
```
2025-09-12T00:27:25.2201818Z === RUN   TestAccCloudUserTeamAssignment_basic
2025-09-12T00:27:25.2208329Z    test_terraform_path=/home/runner/work/_temp/be4f13b7-cbc8-4f5b-8e84-a1238562a15b/terraform test_working_directory=/tmp/plugintest1093633268 test_step_number=2
2025-09-12T00:27:25.2209584Z     resource_test.go:20: Step 2/3 error running import: ImportStateVerify attributes not equivalent. Difference is shown below. The - symbol indicates attributes missing after import.
2025-09-12T00:27:25.2210247Z         
2025-09-12T00:27:25.2210499Z           map[string]string{
2025-09-12T00:27:25.2210920Z         - 	"roles.project_role_assignments.#":                  "15",
2025-09-12T00:27:25.2211410Z         + 	"roles.project_role_assignments.#":                  "14",
2025-09-12T00:27:25.2211888Z         - 	"roles.project_role_assignments.14.%":               "2",
2025-09-12T00:27:25.2212490Z         - 	"roles.project_role_assignments.14.project_id":      "68c368cf239ada3657ef1db9",
2025-09-12T00:27:25.2213279Z         - 	"roles.project_role_assignments.14.project_roles.#": "1",
2025-09-12T00:27:25.2213822Z         - 	"roles.project_role_assignments.14.project_roles.0": "GROUP_OWNER",
2025-09-12T00:27:25.2214182Z           }
2025-09-12T00:27:25.2214442Z --- FAIL: TestAccCloudUserTeamAssignment_basic (5.31s)
```

  - PASS 3 seconds
- 2025-09-13 PASS 3 seconds
- 2025-09-14 PASS 4 seconds
- 2025-09-15
  - PASS 4 seconds
  - PASS 2 seconds
- 2025-09-16 PASS 4 seconds
- 2025-09-17 PASS 4 seconds
- 2025-09-18 PASS 4 seconds
- 2025-09-19 PASS 5 seconds
- 2025-09-20 PASS 6 seconds
- 2025-09-21 PASS 3 seconds
- 2025-09-22 PASS 3 seconds
- 2025-09-23 PASS 4 seconds
- 2025-09-24 PASS 4 seconds
- 2025-09-25 PASS 5 seconds
- 2025-09-26 PASS 5 seconds
- 2025-09-27 PASS 5 seconds
- 2025-09-28 PASS 3 seconds
- 2025-09-29 PASS 4 seconds
- 2025-09-30
  - PASS 4 seconds
  - PASS 3 seconds
  - PASS 4 seconds
- 2025-10-01
  - PASS 5 seconds
  - PASS 4 seconds
  - PASS 5 seconds
  - PASS 3 seconds
  - PASS 4 seconds
  - PASS 3 seconds
  - PASS 3 seconds
  - PASS 4 seconds
- 2025-10-02 PASS 3 seconds