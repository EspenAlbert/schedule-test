# project/projectinvitation/TestAccProjectDSProjectInvitation_basic Test Details
# Found 33 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-03-05 00:41](#error-2026-03-05t0041050000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.07s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 10 seconds
- 2026-02-06 PASS 7 seconds
- 2026-02-07 PASS 11 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS 5 seconds
- 2026-02-10 PASS 10 seconds
- 2026-02-11 PASS 10 seconds
- 2026-02-12 PASS 11 seconds
- 2026-02-13 PASS 10 seconds
- 2026-02-14 PASS 8 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 10 seconds
- 2026-02-17 PASS 15 seconds
- 2026-02-18 PASS 7 seconds
- 2026-02-19 PASS 10 seconds
- 2026-02-20 PASS 9 seconds
- 2026-02-21 PASS 10 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 10 seconds
- 2026-02-24 PASS 9 seconds
- 2026-02-25 PASS 7 seconds
- 2026-02-26 PASS 10 seconds
- 2026-02-27 PASS 8 seconds
- 2026-02-28 PASS 10 seconds
- 2026-03-01: MISSING
- 2026-03-02 PASS 8 seconds
- 2026-03-03 PASS 46 seconds
- 2026-03-04 PASS 10 seconds
- 2026-03-05

### Error 2026-03-05T00:41:05+00:00
```
2026-03-05T00:41:05.6453786Z === RUN   TestAccProjectDSProjectInvitation_basic
2026-03-05T00:41:05.6464801Z    test_name=TestAccProjectDSProjectInvitation_basic test_terraform_path=/home/runner/work/_temp/de4d70af-468e-4001-b0ab-41e24b7ebc73/terraform test_working_directory=/tmp/plugintest2610922716
2026-03-05T00:41:05.6465948Z     data_source_project_invitation_test.go:22: Step 1/1 error: Error running apply: exit status 1
2026-03-05T00:41:05.6466434Z         
2026-03-05T00:41:05.6466876Z         Error: error creating project: test-acc-tf-p-81920867789483467
2026-03-05T00:41:05.6467378Z         
2026-03-05T00:41:05.6467718Z           with mongodbatlas_project.test,
2026-03-05T00:41:05.6468358Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-03-05T00:41:05.6468954Z           13: 		resource "mongodbatlas_project" "test" {
2026-03-05T00:41:05.6469296Z         
2026-03-05T00:41:05.6469922Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-03-05T00:41:05.6470611Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-03-05T00:41:05.6471243Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-03-05T00:41:05.6471725Z --- FAIL: TestAccProjectDSProjectInvitation_basic (62.68s)
```

- 2026-03-06 PASS 11 seconds

## QA Environment
### Timeline
- 2026-02-04 PASS 9 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 5 seconds
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 7 seconds
- 2026-02-16: MISSING
- 2026-02-17 PASS 5 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 4 seconds
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 7 seconds
- 2026-03-02: MISSING
- 2026-03-03 PASS 6 seconds
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
