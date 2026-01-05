# search_deployment/searchdeployment/TestAccSearchDeployment_multiRegion Test Details
# Found 7 TestRuns in dev, qa from 2025-12-30 to 2026-01-05 from master branch: 1 unique tests, PASS(x 5) FAIL(x 2)
Success rate: 71.43%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-03 00:30](#error-2026-01-03t0030050000) |  | dev | timeout | 11710.07s
[2026-01-05 00:34](#error-2026-01-05t0034170000) |  | dev | timeout | 11706.10s

### Timeline
- 2025-12-29: MISSING
- 2025-12-30 PASS 25 minutes
- 2025-12-31 PASS 33 minutes
- 2026-01-01 PASS 27 minutes
- 2026-01-02 PASS 32 minutes
- 2026-01-03

### Error 2026-01-03T00:30:05+00:00
```
2026-01-03T00:30:05.9690109Z === RUN   TestAccSearchDeployment_multiRegion
2026-01-03T00:30:05.9700807Z === CONT  TestAccSearchDeployment_multiRegion
2026-01-03T03:42:43.7507806Z === NAME  TestAccSearchDeployment_multiRegion
2026-01-03T03:42:43.7510501Z     resource_test.go:142: Step 1/1 error: Error running apply: exit status 1
2026-01-03T03:42:43.7511538Z         
2026-01-03T03:42:43.7512092Z         Error: error during search deployment creation
2026-01-03T03:42:43.7512585Z         
2026-01-03T03:42:43.7513128Z           with mongodbatlas_search_deployment.test,
2026-01-03T03:42:43.7514228Z           on terraform_plugin_test.tf line 48, in resource "mongodbatlas_search_deployment" "test":
2026-01-03T03:42:43.7515256Z           48: 	resource "mongodbatlas_search_deployment" "test" {
2026-01-03T03:42:43.7515776Z         
2026-01-03T03:42:43.7516529Z         timeout while waiting for state to become 'IDLE' (last state: 'UPDATING',
2026-01-03T03:42:43.7517275Z         timeout: 3h0m0s)
2026-01-03T03:42:43.7518158Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-01-03T03:42:43.7519312Z         transient error, wait before retrying to allow resource deletion to finish
2026-01-03T03:45:16.6488547Z --- FAIL: TestAccSearchDeployment_multiRegion (11710.68s)
```

- 2026-01-04: MISSING
- 2026-01-05

### Error 2026-01-05T00:34:17+00:00
```
2026-01-05T00:34:17.4517641Z === RUN   TestAccSearchDeployment_multiRegion
2026-01-05T00:34:17.4522182Z === CONT  TestAccSearchDeployment_multiRegion
2026-01-05T03:47:22.5806625Z === NAME  TestAccSearchDeployment_multiRegion
2026-01-05T03:47:22.5807259Z     resource_test.go:142: Step 1/1 error: Error running apply: exit status 1
2026-01-05T03:47:22.5807747Z         
2026-01-05T03:47:22.5808087Z         Error: error during search deployment creation
2026-01-05T03:47:22.5808523Z         
2026-01-05T03:47:22.5808896Z           with mongodbatlas_search_deployment.test,
2026-01-05T03:47:22.5809644Z           on terraform_plugin_test.tf line 48, in resource "mongodbatlas_search_deployment" "test":
2026-01-05T03:47:22.5810268Z           48: 	resource "mongodbatlas_search_deployment" "test" {
2026-01-05T03:47:22.5810585Z         
2026-01-05T03:47:22.5811024Z         timeout while waiting for state to become 'IDLE' (last state: 'UPDATING',
2026-01-05T03:47:22.5811431Z         timeout: 3h0m0s)
2026-01-05T03:47:22.5811913Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-01-05T03:47:22.5812543Z         transient error, wait before retrying to allow resource deletion to finish
2026-01-05T03:49:24.4402260Z --- FAIL: TestAccSearchDeployment_multiRegion (11706.99s)
```


## QA Environment
### Timeline
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 27 minutes
- 2026-01-05: MISSING
