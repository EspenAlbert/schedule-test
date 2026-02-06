# global_cluster_config/globalclusterconfig/TestAccGlobalClusterConfig_basic Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2) TIMEOUT
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035040000) | OUT_OF_CAPACITY /api/atlas/v2/groups/697d4e397d00588dcf9e9137/clusters | dev | out_of_capacity | 9.02s
[2026-02-02 00:38](#error-2026-02-02t0038310000) |  | dev |  | 7190.00s
[2026-02-03 00:39](#error-2026-02-03t0039150000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143b3b2e54ee9959004a7/clusters | dev | out_of_capacity | 14.05s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 14 minutes
- 2026-01-09 PASS 15 minutes
- 2026-01-10 PASS 16 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 15 minutes
- 2026-01-13 PASS 19 minutes
- 2026-01-14 PASS 15 minutes
- 2026-01-15 PASS 17 minutes
- 2026-01-16 PASS 18 minutes
- 2026-01-17 PASS 20 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 15 minutes
- 2026-01-20 PASS 17 minutes
- 2026-01-21 PASS 15 minutes
- 2026-01-22 PASS 17 minutes
- 2026-01-23 PASS 16 minutes
- 2026-01-24 PASS 15 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 14 minutes
- 2026-01-27 PASS 18 minutes
- 2026-01-28 PASS 15 minutes
- 2026-01-29 PASS 17 minutes
- 2026-01-30 PASS 20 minutes
- 2026-01-31

### Error 2026-01-31T00:35:04+00:00
```
2026-01-31T00:35:04.8594277Z === RUN   TestAccGlobalClusterConfig_basic
2026-01-31T00:35:04.8599870Z     resource_global_cluster_config_test.go:30: Creating execution project (1): test-acc-tf-p-7164226719972454167
2026-01-31T03:35:14.2017190Z === CONT  TestAccGlobalClusterConfig_basic
2026-01-31T03:35:19.2019946Z === NAME  TestAccGlobalClusterConfig_basic
2026-01-31T03:35:19.2022266Z     pre_check.go:46: Time before creating cluster: 2026-01-31T03:35:19.201676119Z, ProjectID: 697d4e397d00588dcf9e9137, Cluster name: test-acc-tf-c-5495474201870197873
2026-01-31T03:35:20.1433466Z   
2026-01-31T03:35:20.1434014Z     resource_global_cluster_config_test.go:30: Step 1/3 error: Error running apply: exit status 1
2026-01-31T03:35:20.1434728Z         
2026-01-31T03:35:20.1435114Z         Error: Error in create
2026-01-31T03:35:20.1435537Z         
2026-01-31T03:35:20.1436360Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-31T03:35:20.1437672Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-31T03:35:20.1438874Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-31T03:35:20.1439526Z         
2026-01-31T03:35:20.1440302Z         cluster name: test-acc-tf-c-5495474201870197873, API error details:
2026-01-31T03:35:20.1441548Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/697d4e397d00588dcf9e9137/clusters
2026-01-31T03:35:20.1442562Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-01-31T03:35:20.1443378Z         region is currently out of capacity for the requested instance size. Reason:
2026-01-31T03:35:20.1443902Z         Conflict. Params: [], BadRequestDetail: 
2026-01-31T03:35:20.1972805Z --- FAIL: TestAccGlobalClusterConfig_basic (9.24s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:31+00:00
```
2026-02-02T00:38:31.5330941Z === RUN   TestAccGlobalClusterConfig_basic
2026-02-02T03:38:37.6190412Z === CONT  TestAccGlobalClusterConfig_basic
2026-02-02T03:38:57.6229295Z === NAME  TestAccGlobalClusterConfig_basic
2026-02-02T03:38:57.6231263Z     pre_check.go:46: Time before creating cluster: 2026-02-02T03:38:57.62262626Z, ProjectID: 697ff204197cc66080b00e93, Cluster name: test-acc-tf-c-2747387959778630648
2026-02-02T05:38:27.9894160Z panic: test timed out after 5h0m0s
2026-02-02T05:38:27.9894841Z 	running tests:
2026-02-02T05:38:27.9894160Z panic: test timed out after 5h0m0s
2026-02-02T05:38:27.9894841Z 	running tests:
2026-02-02T05:38:27.9895457Z 		TestAccGlobalClusterConfig_basic (1h59m50s)
```

- 2026-02-03

### Error 2026-02-03T00:39:15+00:00
```
2026-02-03T00:39:15.5355383Z === RUN   TestAccGlobalClusterConfig_basic
2026-02-03T00:39:15.5357250Z     resource_global_cluster_config_test.go:30: Creating execution project (1): test-acc-tf-p-7670541413515640944
2026-02-03T00:39:25.1503591Z === CONT  TestAccGlobalClusterConfig_basic
2026-02-03T00:39:35.1583299Z === NAME  TestAccGlobalClusterConfig_basic
2026-02-03T00:39:35.1584782Z     pre_check.go:46: Time before creating cluster: 2026-02-03T00:39:35.158013813Z, ProjectID: 698143b3b2e54ee9959004a7, Cluster name: test-acc-tf-c-4796435857016845075
2026-02-03T00:39:35.8722805Z   
2026-02-03T00:39:35.8723347Z     resource_global_cluster_config_test.go:30: Step 1/3 error: Error running apply: exit status 1
2026-02-03T00:39:35.8724139Z         
2026-02-03T00:39:35.8724483Z         Error: Error in create
2026-02-03T00:39:35.8724749Z         
2026-02-03T00:39:35.8725104Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-03T00:39:35.8726031Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-03T00:39:35.8726717Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-03T00:39:35.8727065Z         
2026-02-03T00:39:35.8727472Z         cluster name: test-acc-tf-c-4796435857016845075, API error details:
2026-02-03T00:39:35.8728146Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b3b2e54ee9959004a7/clusters
2026-02-03T00:39:35.8728838Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:39:35.8729484Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:39:35.8730229Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:39:35.9194962Z --- FAIL: TestAccGlobalClusterConfig_basic (14.48s)
```

- 2026-02-04 PASS 23 minutes
- 2026-02-05 PASS 22 minutes
- 2026-02-06 PASS 22 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 14 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 13 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 13 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 14 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 13 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 16 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 14 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
