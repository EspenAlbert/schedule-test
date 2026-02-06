# cluster_outage_simulation/clusteroutagesimulation/TestAccClusterOutageSimulation_deleteOnCreateTimeout Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035160000) |  | dev | timeout | 10810.10s
[2026-02-02 00:38](#error-2026-02-02t0038330000) |  | dev | timeout | 10810.07s
[2026-02-03 00:39](#error-2026-02-03t0039180000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143b4e3c7fce2317dc4d0/clusters | dev | out_of_capacity | 15.08s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS an hour
- 2026-01-09 PASS 59 minutes
- 2026-01-10 PASS 57 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 59 minutes
- 2026-01-13 PASS an hour
- 2026-01-14 PASS 57 minutes
- 2026-01-15 PASS 59 minutes
- 2026-01-16 PASS an hour
- 2026-01-17 PASS 57 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 58 minutes
- 2026-01-20 PASS 59 minutes
- 2026-01-21 PASS 58 minutes
- 2026-01-22 PASS an hour
- 2026-01-23 PASS 59 minutes
- 2026-01-24 PASS 58 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 56 minutes
- 2026-01-27 PASS 59 minutes
- 2026-01-28 PASS 59 minutes
- 2026-01-29 PASS 59 minutes
- 2026-01-30 PASS an hour
- 2026-01-31

### Error 2026-01-31T00:35:16+00:00
```
2026-01-31T00:35:16.9685837Z === RUN   TestAccClusterOutageSimulation_deleteOnCreateTimeout
2026-01-31T00:35:16.9692755Z === CONT  TestAccClusterOutageSimulation_deleteOnCreateTimeout
2026-01-31T00:35:26.9734682Z === NAME  TestAccClusterOutageSimulation_deleteOnCreateTimeout
2026-01-31T00:35:26.9736714Z     pre_check.go:46: Time before creating cluster: 2026-01-31T00:35:26.973181053Z, ProjectID: 697d4e3eff188f1e45c454e5, Cluster name: test-acc-tf-c-3618590468283908493
2026-01-31T03:35:27.8743070Z === NAME  TestAccClusterOutageSimulation_deleteOnCreateTimeout
2026-01-31T03:35:27.8744295Z     resource_test.go:168: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-01-31T03:35:27.8745208Z         
2026-01-31T03:35:27.8745645Z         Error: Error in create
2026-01-31T03:35:27.8746077Z         
2026-01-31T03:35:27.8746702Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-31T03:35:27.8748070Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-31T03:35:27.8749065Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-31T03:35:27.8749421Z         
2026-01-31T03:35:27.8750141Z         cluster=test-acc-tf-c-3618590468283908493 didn't reach desired state: IDLE,
2026-01-31T03:35:27.8750716Z         error: context deadline exceeded
2026-01-31T03:35:27.9241057Z --- FAIL: TestAccClusterOutageSimulation_deleteOnCreateTimeout (10810.96s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:33+00:00
```
2026-02-02T00:38:33.5692604Z === RUN   TestAccClusterOutageSimulation_deleteOnCreateTimeout
2026-02-02T00:38:33.5695014Z === CONT  TestAccClusterOutageSimulation_deleteOnCreateTimeout
2026-02-02T00:38:43.5771878Z === NAME  TestAccClusterOutageSimulation_deleteOnCreateTimeout
2026-02-02T00:38:43.5773818Z     pre_check.go:46: Time before creating cluster: 2026-02-02T00:38:43.576857952Z, ProjectID: 697ff207197cc66080b02fe5, Cluster name: test-acc-tf-c-3263012703024047009
2026-02-02T03:38:44.2432512Z === NAME  TestAccClusterOutageSimulation_deleteOnCreateTimeout
2026-02-02T03:38:44.2433485Z     resource_test.go:168: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-02-02T03:38:44.2434247Z         
2026-02-02T03:38:44.2434639Z         Error: Error in create
2026-02-02T03:38:44.2435009Z         
2026-02-02T03:38:44.2435700Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-02T03:38:44.2436582Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-02T03:38:44.2437341Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-02T03:38:44.2437779Z         
2026-02-02T03:38:44.2438309Z         cluster=test-acc-tf-c-3263012703024047009 didn't reach desired state: IDLE,
2026-02-02T03:38:44.2439020Z         error: context deadline exceeded
2026-02-02T03:38:44.2962958Z --- FAIL: TestAccClusterOutageSimulation_deleteOnCreateTimeout (10810.73s)
```

- 2026-02-03

### Error 2026-02-03T00:39:18+00:00
```
2026-02-03T00:39:18.3150001Z === RUN   TestAccClusterOutageSimulation_deleteOnCreateTimeout
2026-02-03T00:39:18.3156175Z === CONT  TestAccClusterOutageSimulation_deleteOnCreateTimeout
2026-02-03T00:39:33.3200326Z === NAME  TestAccClusterOutageSimulation_deleteOnCreateTimeout
2026-02-03T00:39:33.3202393Z     pre_check.go:46: Time before creating cluster: 2026-02-03T00:39:33.319812229Z, ProjectID: 698143b4e3c7fce2317dc4d0, Cluster name: test-acc-tf-c-6564760087969835428
2026-02-03T00:39:34.0611808Z    test_working_directory=/tmp/plugintest4063401167 test_name=TestAccClusterOutageSimulation_deleteOnCreateTimeout
2026-02-03T00:39:34.0613608Z     resource_test.go:168: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-02-03T00:39:34.0614476Z         
2026-02-03T00:39:34.0614908Z         Error: Error in create
2026-02-03T00:39:34.0615308Z         
2026-02-03T00:39:34.0615939Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-03T00:39:34.0617276Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-03T00:39:34.0618591Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-03T00:39:34.0619210Z         
2026-02-03T00:39:34.0619971Z         cluster name: test-acc-tf-c-6564760087969835428, API error details:
2026-02-03T00:39:34.0621244Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b4e3c7fce2317dc4d0/clusters
2026-02-03T00:39:34.0622706Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:39:34.0624356Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:39:34.0625250Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:39:34.1108917Z --- FAIL: TestAccClusterOutageSimulation_deleteOnCreateTimeout (15.80s)
```

- 2026-02-04 PASS an hour
- 2026-02-05 PASS an hour
- 2026-02-06 PASS an hour

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 56 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 57 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 56 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 57 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 57 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 56 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 58 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
