# search_deployment/searchdeployment/TestMigSearchDeployment_basic Test Details
# Found 20 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 19) FAIL
Success rate: 95.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-02 00:38](#error-2026-02-02t0038400000) |  | dev | flaky_client | 251.03s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08: MISSING
- 2026-01-09 PASS 42 minutes
- 2026-01-10: MISSING
- 2026-01-11: MISSING
- 2026-01-12 PASS 32 minutes
- 2026-01-13: MISSING
- 2026-01-14 PASS 31 minutes
- 2026-01-15: MISSING
- 2026-01-16 PASS 37 minutes
- 2026-01-17: MISSING
- 2026-01-18: MISSING
- 2026-01-19 PASS 28 minutes
- 2026-01-20: MISSING
- 2026-01-21 PASS 35 minutes
- 2026-01-22: MISSING
- 2026-01-23 PASS 33 minutes
- 2026-01-24: MISSING
- 2026-01-25: MISSING
- 2026-01-26 PASS 27 minutes
- 2026-01-27: MISSING
- 2026-01-28 PASS 32 minutes
- 2026-01-29: MISSING
- 2026-01-30 PASS 46 minutes
- 2026-01-31: MISSING
- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:40+00:00
```
2026-02-02T00:38:40.6407807Z === RUN   TestMigSearchDeployment_basic
2026-02-02T00:38:44.5250502Z === CONT  TestMigSearchDeployment_basic
2026-02-02T00:42:53.0086961Z === NAME  TestMigSearchDeployment_basic
2026-02-02T00:42:53.0088260Z     resource_migration_test.go:21: Step 1/2 error: Error running apply: exit status 1
2026-02-02T00:42:53.0088920Z         
2026-02-02T00:42:53.0089181Z         Error: Error in create
2026-02-02T00:42:53.0089433Z         
2026-02-02T00:42:53.0089783Z           with mongodbatlas_advanced_cluster.test,
2026-02-02T00:42:53.0090471Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-02T00:42:53.0091109Z           15: 	resource "mongodbatlas_advanced_cluster" "test" {
2026-02-02T00:42:53.0091435Z         
2026-02-02T00:42:53.0091900Z         cluster=test-acc-tf-c-2467475910851463416 didn't reach desired state: IDLE,
2026-02-02T00:42:53.0092446Z         error: Get
2026-02-02T00:42:53.0093495Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/697ff210197cc66080b091e9/clusters/test-acc-tf-c-2467475910851463416":
2026-02-02T00:42:53.0094372Z         dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2026-02-02T00:42:53.1751767Z --- FAIL: TestMigSearchDeployment_basic (251.25s)
```

- 2026-02-03: MISSING
- 2026-02-04 PASS 27 minutes
- 2026-02-05: MISSING
- 2026-02-06 PASS 27 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 25 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 32 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 25 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 27 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 31 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 31 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 26 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
