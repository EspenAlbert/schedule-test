# search_deployment/searchdeployment/TestMigSearchDeployment_basic Test Details
# Found 4 TestRuns in dev, qa from 2025-12-31 to 2026-01-05 from master branch: 1 unique tests, PASS(x 3) FAIL
Success rate: 75.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-05 00:34](#error-2026-01-05t0034120000) |  | dev | timeout | 11562.04s

### Timeline
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31 PASS 30 minutes
- 2026-01-01: MISSING
- 2026-01-02 PASS 31 minutes
- 2026-01-03: MISSING
- 2026-01-04: MISSING
- 2026-01-05

### Error 2026-01-05T00:34:12+00:00
```
2026-01-05T00:34:12.8599204Z === RUN   TestMigSearchDeployment_basic
2026-01-05T00:34:17.4521103Z === CONT  TestMigSearchDeployment_basic
2026-01-05T03:43:53.3740030Z === NAME  TestMigSearchDeployment_basic
2026-01-05T03:43:53.3740693Z     resource_migration_test.go:21: Step 1/2 error: Error running apply: exit status 1
2026-01-05T03:43:53.3741088Z         
2026-01-05T03:43:53.3741422Z         Error: error during search deployment creation
2026-01-05T03:43:53.3741724Z         
2026-01-05T03:43:53.3742051Z           with mongodbatlas_search_deployment.test,
2026-01-05T03:43:53.3742696Z           on terraform_plugin_test.tf line 47, in resource "mongodbatlas_search_deployment" "test":
2026-01-05T03:43:53.3743294Z           47: 		resource "mongodbatlas_search_deployment" "test" {
2026-01-05T03:43:53.3743604Z         
2026-01-05T03:43:53.3744034Z         timeout while waiting for state to become 'IDLE' (last state: 'UPDATING',
2026-01-05T03:43:53.3744440Z         timeout: 3h0m0s)
2026-01-05T03:43:53.3744921Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-01-05T03:43:53.3745550Z         transient error, wait before retrying to allow resource deletion to finish
2026-01-05T03:46:56.3254307Z --- FAIL: TestMigSearchDeployment_basic (11562.39s)
```


## QA Environment
### Timeline
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 25 minutes
- 2026-01-05: MISSING
