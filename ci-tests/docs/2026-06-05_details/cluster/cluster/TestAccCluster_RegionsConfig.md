# cluster/cluster/TestAccCluster_RegionsConfig Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 23) FAIL(x 8)
Success rate: 74.19%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:01](#error-2026-05-09t0101480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 71.06s
[2026-05-15 00:57](#error-2026-05-15t0057030000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/6a066f5d649b96da6ebaa94c/clusters | dev | out_of_capacity | 2.06s
[2026-05-16 00:56](#error-2026-05-16t0056240000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/6a07c0918f63c00f867df894/clusters | dev | out_of_capacity | 2.08s
[2026-05-18 01:00](#error-2026-05-18t0100240000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/6a0a64a5dece59bebe105013/clusters | dev | out_of_capacity | 2.04s
[2026-05-19 01:02](#error-2026-05-19t0102190000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/6a0bb67f04055db6de6891af/clusters | dev | out_of_capacity | 2.09s
[2026-05-20 01:02](#error-2026-05-20t0102540000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/6a0d083db1175fa9274621aa/clusters | dev | out_of_capacity | 2.06s
[2026-05-21 01:02](#error-2026-05-21t0102450000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/6a0e59b129c1c445d4181c97/clusters | dev | out_of_capacity | 2.04s
[2026-05-28 01:00](#error-2026-05-28t0100590000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.08s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS an hour
  - PASS an hour
- 2026-05-08 PASS an hour
- 2026-05-09

### Error 2026-05-09T01:01:48+00:00
```
2026-05-09T01:01:48.1916667Z === RUN   TestAccCluster_RegionsConfig
2026-05-09T01:02:59.8346669Z     shared_resource.go:160: 
2026-05-09T01:02:59.8347950Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:02:59.8350329Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-09T01:02:59.8352295Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-09T01:02:59.8354238Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-09T01:02:59.8356201Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-09T01:02:59.8358241Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:1106
2026-05-09T01:02:59.8359215Z         	Error:      	Received unexpected error:
2026-05-09T01:02:59.8361285Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:02:59.8362418Z         	Test:       	TestAccCluster_RegionsConfig
2026-05-09T01:02:59.8364296Z         	Messages:   	Project creation failed: test-acc-tf-p-3034605693022354229, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:02:59.8368201Z --- FAIL: TestAccCluster_RegionsConfig (71.64s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 59 minutes
- 2026-05-12 PASS 52 minutes
- 2026-05-13 PASS 53 minutes
- 2026-05-14 PASS an hour
- 2026-05-15

### Error 2026-05-15T00:57:03+00:00
```
2026-05-15T00:57:03.8355759Z === RUN   TestAccCluster_RegionsConfig
2026-05-15T00:57:03.8376896Z === CONT  TestAccCluster_RegionsConfig
2026-05-15T00:57:06.3735258Z === NAME  TestAccCluster_RegionsConfig
2026-05-15T00:57:06.3735817Z     resource_cluster_test.go:1184: Step 1/3 error: Error running apply: exit status 1
2026-05-15T00:57:06.3760176Z         
2026-05-15T00:57:06.3762833Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6a066f5d649b96da6ebaa94c/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-05-15T00:57:06.3764611Z         
2026-05-15T00:57:06.3765140Z           with mongodbatlas_cluster.test,
2026-05-15T00:57:06.3766232Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-05-15T00:57:06.3767254Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-05-15T00:57:06.3768780Z         
2026-05-15T00:57:06.4522632Z --- FAIL: TestAccCluster_RegionsConfig (2.62s)
```

- 2026-05-16

### Error 2026-05-16T00:56:24+00:00
```
2026-05-16T00:56:24.9801731Z === RUN   TestAccCluster_RegionsConfig
2026-05-16T00:56:25.0950082Z === CONT  TestAccCluster_RegionsConfig
2026-05-16T00:56:27.7670661Z === NAME  TestAccCluster_RegionsConfig
2026-05-16T00:56:27.7671388Z     resource_cluster_test.go:1184: Step 1/3 error: Error running apply: exit status 1
2026-05-16T00:56:27.7671931Z         
2026-05-16T00:56:27.7673777Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6a07c0918f63c00f867df894/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-05-16T00:56:27.7675198Z         
2026-05-16T00:56:27.7675566Z           with mongodbatlas_cluster.test,
2026-05-16T00:56:27.7676482Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-05-16T00:56:27.7677216Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-05-16T00:56:27.7677815Z         
2026-05-16T00:56:27.8214171Z --- FAIL: TestAccCluster_RegionsConfig (2.84s)
```

- 2026-05-17: MISSING
- 2026-05-18

### Error 2026-05-18T01:00:24+00:00
```
2026-05-18T01:00:24.5628777Z === RUN   TestAccCluster_RegionsConfig
2026-05-18T01:00:24.5988730Z === CONT  TestAccCluster_RegionsConfig
2026-05-18T01:00:26.8857926Z    test_terraform_path=/home/runner/work/_temp/da2a46a1-35d9-49fe-85b2-48b9e7d3332a/terraform
2026-05-18T01:00:26.9664357Z === NAME  TestAccCluster_RegionsConfig
2026-05-18T01:00:26.9665184Z     resource_cluster_test.go:1184: Step 1/3 error: Error running apply: exit status 1
2026-05-18T01:00:26.9665821Z         
2026-05-18T01:00:26.9667776Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6a0a64a5dece59bebe105013/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-05-18T01:00:26.9668820Z         
2026-05-18T01:00:26.9669395Z           with mongodbatlas_cluster.test,
2026-05-18T01:00:26.9670183Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-05-18T01:00:26.9670842Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-05-18T01:00:26.9671158Z         
2026-05-18T01:00:27.0214495Z --- FAIL: TestAccCluster_RegionsConfig (2.45s)
```

- 2026-05-19

### Error 2026-05-19T01:02:19+00:00
```
2026-05-19T01:02:19.9108289Z === RUN   TestAccCluster_RegionsConfig
2026-05-19T01:02:19.9553211Z === CONT  TestAccCluster_RegionsConfig
2026-05-19T01:02:22.7591289Z === NAME  TestAccCluster_RegionsConfig
2026-05-19T01:02:22.7591825Z     resource_cluster_test.go:1184: Step 1/3 error: Error running apply: exit status 1
2026-05-19T01:02:22.7592245Z         
2026-05-19T01:02:22.7593611Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6a0bb67f04055db6de6891af/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-05-19T01:02:22.7595181Z         
2026-05-19T01:02:22.7595489Z           with mongodbatlas_cluster.test,
2026-05-19T01:02:22.7596116Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-05-19T01:02:22.7596690Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-05-19T01:02:22.7596985Z         
2026-05-19T01:02:22.8084173Z --- FAIL: TestAccCluster_RegionsConfig (2.89s)
```

- 2026-05-20

### Error 2026-05-20T01:02:54+00:00
```
2026-05-20T01:02:54.9788321Z === RUN   TestAccCluster_RegionsConfig
2026-05-20T01:02:54.9796328Z === CONT  TestAccCluster_RegionsConfig
2026-05-20T01:02:57.5092858Z === NAME  TestAccCluster_RegionsConfig
2026-05-20T01:02:57.5093701Z     resource_cluster_test.go:1184: Step 1/3 error: Error running apply: exit status 1
2026-05-20T01:02:57.5094386Z         
2026-05-20T01:02:57.5096643Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6a0d083db1175fa9274621aa/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-05-20T01:02:57.5097653Z         
2026-05-20T01:02:57.5098069Z           with mongodbatlas_cluster.test,
2026-05-20T01:02:57.5098687Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-05-20T01:02:57.5099499Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-05-20T01:02:57.5099844Z         
2026-05-20T01:02:57.5648319Z --- FAIL: TestAccCluster_RegionsConfig (2.59s)
```

- 2026-05-21

### Error 2026-05-21T01:02:45+00:00
```
2026-05-21T01:02:45.6927729Z === RUN   TestAccCluster_RegionsConfig
2026-05-21T01:02:45.6999418Z === CONT  TestAccCluster_RegionsConfig
2026-05-21T01:02:48.0307738Z === NAME  TestAccCluster_RegionsConfig
2026-05-21T01:02:48.0308497Z     resource_cluster_test.go:1184: Step 1/3 error: Error running apply: exit status 1
2026-05-21T01:02:48.0308951Z         
2026-05-21T01:02:48.0310522Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6a0e59b129c1c445d4181c97/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-05-21T01:02:48.0311691Z         
2026-05-21T01:02:48.0312013Z           with mongodbatlas_cluster.test,
2026-05-21T01:02:48.0312776Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-05-21T01:02:48.0313483Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-05-21T01:02:48.0313888Z         
2026-05-21T01:02:48.0827461Z --- FAIL: TestAccCluster_RegionsConfig (2.39s)
```

- 2026-05-22 PASS 2 hours
- 2026-05-23 PASS 57 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS an hour
- 2026-05-26 PASS 52 minutes
- 2026-05-27 PASS 2 hours
- 2026-05-28

### Error 2026-05-28T01:00:59+00:00
```
2026-05-28T01:00:59.3793599Z === RUN   TestAccCluster_RegionsConfig
2026-05-28T01:01:00.1808454Z     shared_resource.go:160: 
2026-05-28T01:01:00.1809528Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:01:00.1811386Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-28T01:01:00.1813198Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-28T01:01:00.1814830Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-28T01:01:00.1816481Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-28T01:01:00.1818191Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:1083
2026-05-28T01:01:00.1818943Z         	Error:      	Received unexpected error:
2026-05-28T01:01:00.1821824Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:00.1823204Z         	Test:       	TestAccCluster_RegionsConfig
2026-05-28T01:01:00.1825294Z         	Messages:   	Project creation failed: test-acc-tf-p-4479772777074674248, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:00.1826699Z --- FAIL: TestAccCluster_RegionsConfig (0.80s)
```

- 2026-05-29 PASS 56 minutes
- 2026-05-30 PASS 50 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS an hour
- 2026-06-02 PASS 40 minutes
- 2026-06-03 PASS an hour
- 2026-06-04 PASS an hour
- 2026-06-05 PASS an hour

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 53 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 56 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 51 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 42 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
