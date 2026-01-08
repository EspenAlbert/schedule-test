# config/teamprojectassignment/TestMigTeamProjectAssignment_migrationJourney Test Details
# Found 18 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 17) FAIL
Success rate: 94.44%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:33](#error-2026-01-07t0033250000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da98caf4f6cc389e91d7b | dev | flaky_500 | 10.06s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 15 seconds
  - PASS 18 seconds
- 2025-12-11: MISSING
- 2025-12-12 PASS 21 seconds
- 2025-12-13: MISSING
- 2025-12-14: MISSING
- 2025-12-15 PASS 20 seconds
- 2025-12-16: MISSING
- 2025-12-17 PASS 15 seconds
- 2025-12-18: MISSING
- 2025-12-19 PASS 15 seconds
- 2025-12-20: MISSING
- 2025-12-21: MISSING
- 2025-12-22 PASS 19 seconds
- 2025-12-23: MISSING
- 2025-12-24 PASS 19 seconds
- 2025-12-25: MISSING
- 2025-12-26 PASS 20 seconds
- 2025-12-27: MISSING
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31 PASS 16 seconds
- 2026-01-01: MISSING
- 2026-01-02 PASS 17 seconds
- 2026-01-03: MISSING
- 2026-01-04: MISSING
- 2026-01-05 PASS 17 seconds
- 2026-01-06: MISSING
- 2026-01-07

### Error 2026-01-07T00:33:25+00:00
```
2026-01-07T00:33:25.9842860Z === RUN   TestMigTeamProjectAssignment_migrationJourney
2026-01-07T00:33:25.9850467Z   
2026-01-07T00:33:25.9850873Z     resource_migration_test.go:32: Step 1/3 error: Error running apply: exit status 1
2026-01-07T00:33:25.9851261Z         
2026-01-07T00:33:25.9851582Z         Error: error when getting project after create
2026-01-07T00:33:25.9851989Z         
2026-01-07T00:33:25.9852367Z           with mongodbatlas_project.migration_path_project1,
2026-01-07T00:33:25.9853076Z           on terraform_plugin_test.tf line 33, in resource "mongodbatlas_project" "migration_path_project1":
2026-01-07T00:33:25.9853754Z           33: 		resource "mongodbatlas_project" "migration_path_project1" {
2026-01-07T00:33:25.9854099Z         
2026-01-07T00:33:25.9854431Z         error getting project (695da98caf4f6cc389e91d7b):
2026-01-07T00:33:25.9855006Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da98caf4f6cc389e91d7b
2026-01-07T00:33:25.9855643Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:33:25.9856219Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:33:25.9856605Z         BadRequestDetail: 
2026-01-07T00:33:25.9865371Z   
2026-01-07T00:33:25.9865845Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2026-01-07T00:33:25.9866274Z         
2026-01-07T00:33:25.9868321Z         Error: error deleting Team (695da98caf4f6cc389e91d65): error getting teams from project information: https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da98bd59b8466ea7362b6/teams GET: HTTP 404 Not Found (Error code: "GROUP_NOT_FOUND") Detail: No group with ID 695da98bd59b8466ea7362b6 exists. Reason: Not Found. Params: [695da98bd59b8466ea7362b6], BadRequestDetail: 
2026-01-07T00:33:25.9869605Z         
2026-01-07T00:33:25.9871665Z         Error: error deleting Team (695da98cd59b8466ea7364a6): error getting teams from project information: https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da98bd59b8466ea7362b6/teams GET: HTTP 404 Not Found (Error code: "GROUP_NOT_FOUND") Detail: No group with ID 695da98bd59b8466ea7362b6 exists. Reason: Not Found. Params: [695da98bd59b8466ea7362b6], BadRequestDetail: 
2026-01-07T00:33:25.9872940Z         
2026-01-07T00:33:25.9873241Z --- FAIL: TestMigTeamProjectAssignment_migrationJourney (10.57s)
```

- 2026-01-08: MISSING

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 16 seconds
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 17 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 17 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 15 seconds
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 20 seconds
