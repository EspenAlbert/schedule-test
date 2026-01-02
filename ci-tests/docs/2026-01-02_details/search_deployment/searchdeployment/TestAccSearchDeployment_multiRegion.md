# search_deployment/searchdeployment/TestAccSearchDeployment_multiRegion Test Details
# Found 31 TestRuns in dev, qa from 2025-12-04 to 2026-01-02 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-12-11 00:31](#error-2025-12-11t0031190000) |  | dev | timeout | 11621.04s

### Timeline
- 2025-12-03: MISSING
- 2025-12-04 PASS 40 minutes
- 2025-12-05 PASS an hour
- 2025-12-06 PASS 27 minutes
- 2025-12-07: MISSING
- 2025-12-08 PASS 28 minutes
- 2025-12-09 PASS 29 minutes
- 2025-12-10
  - PASS 32 minutes
  - PASS 27 minutes
- 2025-12-11

### Error 2025-12-11T00:31:19+00:00
```
2025-12-11T00:31:19.6047128Z === RUN   TestAccSearchDeployment_multiRegion
2025-12-11T00:31:19.6048405Z     resource_test.go:130: Creating execution project: test-acc-tf-p-2860021003303162018
2025-12-11T00:31:22.0221458Z === CONT  TestAccSearchDeployment_multiRegion
2025-12-11T03:42:28.1457706Z === NAME  TestAccSearchDeployment_multiRegion
2025-12-11T03:42:28.1458419Z     resource_test.go:142: Step 1/1 error: Error running apply: exit status 1
2025-12-11T03:42:28.1458854Z         
2025-12-11T03:42:28.1459232Z         Error: error during search deployment creation
2025-12-11T03:42:28.1459554Z         
2025-12-11T03:42:28.1459978Z           with mongodbatlas_search_deployment.test,
2025-12-11T03:42:28.1460727Z           on terraform_plugin_test.tf line 48, in resource "mongodbatlas_search_deployment" "test":
2025-12-11T03:42:28.1461412Z           48: 	resource "mongodbatlas_search_deployment" "test" {
2025-12-11T03:42:28.1461732Z         
2025-12-11T03:42:28.1462263Z         timeout while waiting for state to become 'IDLE' (last state: 'UPDATING',
2025-12-11T03:42:28.1462673Z         timeout: 3h0m0s)
2025-12-11T03:42:28.1463294Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2025-12-11T03:42:28.1463916Z         transient error, wait before retrying to allow resource deletion to finish
2025-12-11T03:45:01.0419816Z --- FAIL: TestAccSearchDeployment_multiRegion (11621.44s)
```

- 2025-12-12 PASS 32 minutes
- 2025-12-13 PASS 30 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 27 minutes
- 2025-12-16 PASS 31 minutes
- 2025-12-17 PASS 32 minutes
- 2025-12-18 PASS 33 minutes
- 2025-12-19 PASS 33 minutes
- 2025-12-20 PASS 29 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 35 minutes
- 2025-12-23 PASS 29 minutes
- 2025-12-24 PASS 33 minutes
- 2025-12-25 PASS 43 minutes
- 2025-12-26 PASS 34 minutes
- 2025-12-27 PASS 26 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 25 minutes
- 2025-12-31 PASS 33 minutes
- 2026-01-01 PASS 27 minutes
- 2026-01-02 PASS 32 minutes

## QA Environment
### Timeline
- 2025-12-03: MISSING
- 2025-12-04: MISSING
- 2025-12-05: MISSING
- 2025-12-06: MISSING
- 2025-12-07 PASS 26 minutes
- 2025-12-08: MISSING
- 2025-12-09 PASS 27 minutes
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 30 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 26 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 26 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
