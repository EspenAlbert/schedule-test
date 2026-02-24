# search_deployment/searchdeployment/TestAccSearchDeployment_multiRegion Test Details
# Found 32 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035210000) |  | dev | timeout | 10801.02s
[2026-02-02 00:38](#error-2026-02-02t0038440000) |  | dev | timeout | 10801.01s
[2026-02-03 00:39](#error-2026-02-03t0039310000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143bee3c7fce2317e3566/clusters | dev | out_of_capacity | 1.00s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 28 minutes
- 2026-01-27 PASS 32 minutes
- 2026-01-28 PASS 33 minutes
- 2026-01-29 PASS 40 minutes
- 2026-01-30 PASS 46 minutes
- 2026-01-31

### Error 2026-01-31T00:35:21+00:00
```
2026-01-31T00:35:21.0971233Z === RUN   TestAccSearchDeployment_multiRegion
2026-01-31T00:35:21.0986731Z === CONT  TestAccSearchDeployment_multiRegion
2026-01-31T03:35:22.2065816Z === NAME  TestAccSearchDeployment_multiRegion
2026-01-31T03:35:22.2066524Z     resource_test.go:142: Step 1/1 error: Error running apply: exit status 1
2026-01-31T03:35:22.2067350Z         
2026-01-31T03:35:22.2067656Z         Error: Error in create
2026-01-31T03:35:22.2067904Z         
2026-01-31T03:35:22.2068342Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-31T03:35:22.2069122Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-31T03:35:22.2069826Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-31T03:35:22.2070207Z         
2026-01-31T03:35:22.2070722Z         cluster=multi-region-cluster didn't reach desired state: IDLE, error: context
2026-01-31T03:35:22.2071346Z         deadline exceeded
2026-01-31T03:35:22.2539298Z --- FAIL: TestAccSearchDeployment_multiRegion (10801.16s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:44+00:00
```
2026-02-02T00:38:44.5245629Z === RUN   TestAccSearchDeployment_multiRegion
2026-02-02T00:38:44.5251616Z === CONT  TestAccSearchDeployment_multiRegion
2026-02-02T03:38:45.5268982Z === NAME  TestAccSearchDeployment_multiRegion
2026-02-02T03:38:45.5269909Z     resource_test.go:142: Step 1/1 error: Error running apply: exit status 1
2026-02-02T03:38:45.5270627Z         
2026-02-02T03:38:45.5271586Z         Error: Error in create
2026-02-02T03:38:45.5272087Z         
2026-02-02T03:38:45.5272783Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-02T03:38:45.5273958Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-02T03:38:45.5275082Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-02T03:38:45.5275680Z         
2026-02-02T03:38:45.5276309Z         cluster=multi-region-cluster didn't reach desired state: IDLE, error: context
2026-02-02T03:38:45.5277112Z         deadline exceeded
2026-02-02T03:38:45.5340989Z    test_terraform_path=/home/runner/work/_temp/7a8c99e7-dc0f-4b5d-90d6-ee0fca5e45d2/terraform test_working_directory=/tmp/plugintest1945757685 test_name=TestAccSearchDeployment_timeoutTest test_step_number=1
2026-02-02T03:38:45.6102628Z --- FAIL: TestAccSearchDeployment_multiRegion (10801.09s)
```

- 2026-02-03

### Error 2026-02-03T00:39:31+00:00
```
2026-02-03T00:39:31.0650233Z === RUN   TestAccSearchDeployment_multiRegion
2026-02-03T00:39:31.0661472Z === CONT  TestAccSearchDeployment_multiRegion
2026-02-03T00:39:32.0556716Z   
2026-02-03T00:39:32.0557238Z     resource_test.go:142: Step 1/1 error: Error running apply: exit status 1
2026-02-03T00:39:32.0557634Z         
2026-02-03T00:39:32.0557971Z         Error: Error in create
2026-02-03T00:39:32.0558229Z         
2026-02-03T00:39:32.0558592Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-03T00:39:32.0559608Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-03T00:39:32.0560587Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-03T00:39:32.0561232Z         
2026-02-03T00:39:32.0561601Z         cluster name: multi-region-cluster, API error details:
2026-02-03T00:39:32.0562251Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143bee3c7fce2317e3566/clusters
2026-02-03T00:39:32.0562948Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:39:32.0563603Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:39:32.0564097Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:39:32.1046545Z --- FAIL: TestAccSearchDeployment_multiRegion (1.04s)
```

- 2026-02-04 PASS 34 minutes
- 2026-02-05 PASS 34 minutes
- 2026-02-06 PASS 35 minutes
- 2026-02-07 PASS 32 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 33 minutes
- 2026-02-10 PASS 31 minutes
- 2026-02-11 PASS 35 minutes
- 2026-02-12 PASS an hour
- 2026-02-13 PASS an hour
- 2026-02-14 PASS 35 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 35 minutes
- 2026-02-17 PASS 31 minutes
- 2026-02-18 PASS 36 minutes
- 2026-02-19 PASS 50 minutes
- 2026-02-20 PASS 36 minutes
- 2026-02-21 PASS 33 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 34 minutes
- 2026-02-24 PASS 32 minutes

## QA Environment
### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 33 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 29 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 33 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 35 minutes
- 2026-02-16: MISSING
- 2026-02-17 PASS 29 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 31 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
