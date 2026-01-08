# search_deployment/searchdeployment/TestAccSearchDeployment_multiRegion Test Details
# Found 33 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 28) FAIL(x 5)
Success rate: 84.85%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-12-11 00:31](#error-2025-12-11t0031190000) |  | dev | timeout | 11621.04s
[2026-01-03 00:30](#error-2026-01-03t0030050000) |  | dev | timeout | 11710.07s
[2026-01-05 00:34](#error-2026-01-05t0034170000) |  | dev | timeout | 11706.10s
[2026-01-05 07:56](#error-2026-01-05t0756360000) |  | dev | timeout | 11710.07s
[2026-01-07 00:30](#error-2026-01-07t0030390000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da92dd59b8466ea71f9a4/clusters/multi-region-cluster | dev | flaky_500 | 122.06s

### Timeline
- 2025-12-09: MISSING
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
  - FAIL 3 hours

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

  - FAIL 3 hours

### Error 2026-01-05T07:56:36+00:00
```
2026-01-05T07:56:36.4413749Z === RUN   TestAccSearchDeployment_multiRegion
2026-01-05T07:56:36.4449770Z === CONT  TestAccSearchDeployment_multiRegion
2026-01-05T11:08:12.8176635Z === NAME  TestAccSearchDeployment_multiRegion
2026-01-05T11:08:12.8177539Z     resource_test.go:142: Step 1/1 error: Error running apply: exit status 1
2026-01-05T11:08:12.8178175Z         
2026-01-05T11:08:12.8178765Z         Error: error during search deployment creation
2026-01-05T11:08:12.8179295Z         
2026-01-05T11:08:12.8179896Z           with mongodbatlas_search_deployment.test,
2026-01-05T11:08:12.8181262Z           on terraform_plugin_test.tf line 48, in resource "mongodbatlas_search_deployment" "test":
2026-01-05T11:08:12.8182356Z           48: 	resource "mongodbatlas_search_deployment" "test" {
2026-01-05T11:08:12.8182902Z         
2026-01-05T11:08:12.8183723Z         timeout while waiting for state to become 'IDLE' (last state: 'UPDATING',
2026-01-05T11:08:12.8184459Z         timeout: 3h0m0s)
2026-01-05T11:08:12.8185360Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-01-05T11:08:12.8186520Z         transient error, wait before retrying to allow resource deletion to finish
2026-01-05T11:11:47.1457874Z --- FAIL: TestAccSearchDeployment_multiRegion (11710.70s)
```

- 2026-01-06 PASS 29 minutes
- 2026-01-07

### Error 2026-01-07T00:30:39+00:00
```
2026-01-07T00:30:39.8490622Z === RUN   TestAccSearchDeployment_multiRegion
2026-01-07T00:30:39.8503454Z === CONT  TestAccSearchDeployment_multiRegion
2026-01-07T00:31:12.1600382Z   
2026-01-07T00:32:42.4580574Z === NAME  TestAccSearchDeployment_multiRegion
2026-01-07T00:32:42.4581437Z     resource_test.go:142: Step 1/1 error: Error running apply: exit status 1
2026-01-07T00:32:42.4582053Z         
2026-01-07T00:32:42.4582464Z         Error: Error in create
2026-01-07T00:32:42.4582859Z         
2026-01-07T00:32:42.4583455Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-07T00:32:42.4584666Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-07T00:32:42.4585786Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-07T00:32:42.4586355Z         
2026-01-07T00:32:42.4587098Z         cluster=multi-region-cluster didn't reach desired state: IDLE, error:
2026-01-07T00:32:42.4588668Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da92dd59b8466ea71f9a4/clusters/multi-region-cluster
2026-01-07T00:32:42.4590007Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:32:42.4590998Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:32:42.4591647Z         BadRequestDetail: 
2026-01-07T00:32:42.5038509Z --- FAIL: TestAccSearchDeployment_multiRegion (122.65s)
```

- 2026-01-08 PASS 27 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
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
- 2026-01-03: MISSING
- 2026-01-04 PASS 27 minutes
- 2026-01-05 PASS 24 minutes
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 29 minutes
