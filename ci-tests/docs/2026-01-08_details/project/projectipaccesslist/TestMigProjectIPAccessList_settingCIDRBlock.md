# project/projectipaccesslist/TestMigProjectIPAccessList_settingCIDRBlock Test Details
# Found 19 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 18) FAIL
Success rate: 94.74%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-01-08 08:00](#error-2026-01-08t0800590000) |  | dev | 12.05s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 17 seconds
  - PASS 2 minutes
- 2025-12-11: MISSING
- 2025-12-12 PASS 18 seconds
- 2025-12-13: MISSING
- 2025-12-14: MISSING
- 2025-12-15 PASS 20 seconds
- 2025-12-16: MISSING
- 2025-12-17 PASS 17 seconds
- 2025-12-18: MISSING
- 2025-12-19 PASS 17 seconds
- 2025-12-20: MISSING
- 2025-12-21: MISSING
- 2025-12-22 PASS 18 seconds
- 2025-12-23: MISSING
- 2025-12-24 PASS 2 minutes
- 2025-12-25: MISSING
- 2025-12-26 PASS 17 seconds
- 2025-12-27: MISSING
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31 PASS 17 seconds
- 2026-01-01: MISSING
- 2026-01-02 PASS 2 minutes
- 2026-01-03: MISSING
- 2026-01-04: MISSING
- 2026-01-05 PASS 17 seconds
- 2026-01-06: MISSING
- 2026-01-07 PASS 2 minutes
- 2026-01-08

### Error 2026-01-08T08:00:59+00:00
```
2026-01-08T08:00:59.4219349Z === RUN   TestMigProjectIPAccessList_settingCIDRBlock
2026-01-08T08:00:59.4256592Z === CONT  TestMigProjectIPAccessList_settingCIDRBlock
2026-01-08T08:00:59.4268257Z   
2026-01-08T08:00:59.4358618Z === NAME  TestMigProjectIPAccessList_settingCIDRBlock
2026-01-08T08:00:59.4359421Z     resource_project_ip_access_list_migration_test.go:43: Step 1/2 error: Error running apply: exit status 1
2026-01-08T08:00:59.4360230Z         
2026-01-08T08:00:59.4360718Z         Error: error while waiting for resource creation
2026-01-08T08:00:59.4361046Z         
2026-01-08T08:00:59.4361548Z           with mongodbatlas_project_ip_access_list.test,
2026-01-08T08:00:59.4362525Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project_ip_access_list" "test":
2026-01-08T08:00:59.4363361Z           14: 		resource "mongodbatlas_project_ip_access_list" "test" {
2026-01-08T08:00:59.4363798Z         
2026-01-08T08:00:59.4364198Z         error creating Project IP Access List information:
2026-01-08T08:00:59.4365103Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695f639dbd8c78dbeaf9aa46/accessList
2026-01-08T08:00:59.4365949Z         POST: HTTP 401 Unauthorized (Error code: "") Detail:  Reason: . Params: [],
2026-01-08T08:00:59.4366526Z         BadRequestDetail: 
2026-01-08T08:00:59.4366876Z --- FAIL: TestMigProjectIPAccessList_settingCIDRBlock (12.53s)
```


## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 17 seconds
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 2 minutes
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
- 2026-01-04 PASS 2 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 15 seconds
