# global_cluster_config/globalclusterconfig/TestAccGlobalClusterConfig_iss Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2) TIMEOUT
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035080000) | OUT_OF_CAPACITY /api/atlas/v2/groups/697d4e397d00588dcf9e9137/clusters | dev | out_of_capacity | 10.09s
[2026-02-02 00:38](#error-2026-02-02t0038310000) |  | dev |  | 7190.00s
[2026-02-03 00:39](#error-2026-02-03t0039190000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143b3b2e54ee9959004a7/clusters | dev | out_of_capacity | 5.08s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 15 minutes
- 2026-01-09 PASS 15 minutes
- 2026-01-10 PASS 17 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 15 minutes
- 2026-01-13 PASS 19 minutes
- 2026-01-14 PASS 16 minutes
- 2026-01-15 PASS 18 minutes
- 2026-01-16 PASS 18 minutes
- 2026-01-17 PASS 19 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 16 minutes
- 2026-01-20 PASS 17 minutes
- 2026-01-21 PASS 17 minutes
- 2026-01-22 PASS 17 minutes
- 2026-01-23 PASS 16 minutes
- 2026-01-24 PASS 15 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 15 minutes
- 2026-01-27 PASS 18 minutes
- 2026-01-28 PASS 17 minutes
- 2026-01-29 PASS 18 minutes
- 2026-01-30 PASS 21 minutes
- 2026-01-31

### Error 2026-01-31T00:35:08+00:00
```
2026-01-31T00:35:08.1084897Z === RUN   TestAccGlobalClusterConfig_iss
2026-01-31T03:35:14.2017537Z === CONT  TestAccGlobalClusterConfig_iss
2026-01-31T03:35:24.2022338Z === NAME  TestAccGlobalClusterConfig_iss
2026-01-31T03:35:24.2024434Z     pre_check.go:46: Time before creating cluster: 2026-01-31T03:35:24.201893388Z, ProjectID: 697d4e397d00588dcf9e9137, Cluster name: test-acc-tf-c-6108643393932548457
2026-01-31T03:35:25.0711041Z   
2026-01-31T03:35:25.0711998Z     resource_global_cluster_config_test.go:62: Step 1/1 error: Error running apply: exit status 1
2026-01-31T03:35:25.0712512Z         
2026-01-31T03:35:25.0712772Z         Error: Error in create
2026-01-31T03:35:25.0713023Z         
2026-01-31T03:35:25.0713399Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-31T03:35:25.0714160Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-31T03:35:25.0714864Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-31T03:35:25.0715241Z         
2026-01-31T03:35:25.0715670Z         cluster name: test-acc-tf-c-6108643393932548457, API error details:
2026-01-31T03:35:25.0716620Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/697d4e397d00588dcf9e9137/clusters
2026-01-31T03:35:25.0717342Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-01-31T03:35:25.0718024Z         region is currently out of capacity for the requested instance size. Reason:
2026-01-31T03:35:25.0718548Z         Conflict. Params: [], BadRequestDetail: 
2026-01-31T03:35:25.1239029Z --- FAIL: TestAccGlobalClusterConfig_iss (10.92s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:31+00:00
```
2026-02-02T00:38:31.5341418Z === RUN   TestAccGlobalClusterConfig_iss
2026-02-02T03:38:37.6190086Z === CONT  TestAccGlobalClusterConfig_iss
2026-02-02T03:38:47.6195322Z === NAME  TestAccGlobalClusterConfig_iss
2026-02-02T03:38:47.6197652Z     pre_check.go:46: Time before creating cluster: 2026-02-02T03:38:47.61921088Z, ProjectID: 697ff204197cc66080b00e93, Cluster name: test-acc-tf-c-6750973698381215693
2026-02-02T05:38:27.9894841Z 	running tests:
2026-02-02T05:38:27.9895457Z 		TestAccGlobalClusterConfig_basic (1h59m50s)
2026-02-02T05:38:27.9896256Z 		TestAccGlobalClusterConfig_iss (1h59m50s)
```

- 2026-02-03

### Error 2026-02-03T00:39:19+00:00
```
2026-02-03T00:39:19.2452069Z === RUN   TestAccGlobalClusterConfig_iss
2026-02-03T00:39:25.1503926Z === CONT  TestAccGlobalClusterConfig_iss
2026-02-03T00:39:30.1544812Z === NAME  TestAccGlobalClusterConfig_iss
2026-02-03T00:39:30.1547318Z     pre_check.go:46: Time before creating cluster: 2026-02-03T00:39:30.154197482Z, ProjectID: 698143b3b2e54ee9959004a7, Cluster name: test-acc-tf-c-7835756896740311754
2026-02-03T00:39:30.9168159Z   
2026-02-03T00:39:30.9168793Z     resource_global_cluster_config_test.go:62: Step 1/1 error: Error running apply: exit status 1
2026-02-03T00:39:30.9169284Z         
2026-02-03T00:39:30.9169666Z         Error: Error in create
2026-02-03T00:39:30.9170125Z         
2026-02-03T00:39:30.9170552Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-03T00:39:30.9171269Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-03T00:39:30.9171967Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-03T00:39:30.9172307Z         
2026-02-03T00:39:30.9172714Z         cluster name: test-acc-tf-c-7835756896740311754, API error details:
2026-02-03T00:39:30.9173646Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b3b2e54ee9959004a7/clusters
2026-02-03T00:39:30.9174343Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:39:30.9174994Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:39:30.9175493Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:39:30.9643926Z --- FAIL: TestAccGlobalClusterConfig_iss (5.81s)
```

- 2026-02-04 PASS 25 minutes
- 2026-02-05 PASS an hour
- 2026-02-06 PASS 28 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 14 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 14 minutes
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
- 2026-01-22 PASS 13 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 14 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 15 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 15 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
