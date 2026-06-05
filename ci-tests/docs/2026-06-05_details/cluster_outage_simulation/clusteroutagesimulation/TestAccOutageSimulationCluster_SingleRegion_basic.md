# cluster_outage_simulation/clusteroutagesimulation/TestAccOutageSimulationCluster_SingleRegion_basic Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 26) FAIL(x 4)
Success rate: 86.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-15 00:56](#error-2026-05-15t0056450000) |  | dev |  | 264.02s
[2026-05-21 01:02](#error-2026-05-21t0102470000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.03s
[2026-05-28 00:56](#error-2026-05-28t0056540000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.07s
[2026-05-30 01:00](#error-2026-05-30t0100040000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.06s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 56 minutes
- 2026-05-08 PASS 51 minutes
- 2026-05-09 PASS 51 minutes
- 2026-05-10: MISSING
- 2026-05-11 PASS 51 minutes
- 2026-05-12 PASS 47 minutes
- 2026-05-13 PASS 45 minutes
- 2026-05-14 PASS an hour
- 2026-05-15

### Error 2026-05-15T00:56:45+00:00
```
2026-05-15T00:56:45.6959038Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2026-05-15T00:56:45.6970893Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2026-05-15T00:57:05.7105542Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2026-05-15T00:57:05.7106994Z     pre_check.go:46: Time before creating cluster: 2026-05-15T00:57:05.7102525Z, ProjectID: 6a066f4bbf5881c97de57bde, Cluster name: test-acc-tf-c-5112915871107289957
2026-05-15T01:01:09.8715537Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2026-05-15T01:01:09.8716130Z     resource_test.go:22: Step 1/1 error: Error running apply: exit status 1
2026-05-15T01:01:09.8716532Z         
2026-05-15T01:01:09.8716796Z         Error: Error in create
2026-05-15T01:01:09.8717054Z         
2026-05-15T01:01:09.8717422Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-05-15T01:01:09.8718159Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-05-15T01:01:09.8718858Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-05-15T01:01:09.8719209Z         
2026-05-15T01:01:09.8719680Z         cluster=test-acc-tf-c-5112915871107289957 didn't reach desired state: IDLE,
2026-05-15T01:01:09.8720103Z         error:
2026-05-15T01:01:09.8720832Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a066f4bbf5881c97de57bde/clusters/test-acc-tf-c-5112915871107289957
2026-05-15T01:01:09.8721639Z         GET: HTTP 403 Forbidden (Error code: "") Detail:  Reason: . Params: [],
2026-05-15T01:01:09.8722068Z         BadRequestDetail: 
2026-05-15T01:01:09.9219213Z --- FAIL: TestAccOutageSimulationCluster_SingleRegion_basic (264.23s)
```

- 2026-05-16 PASS 44 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS an hour
- 2026-05-19 PASS 44 minutes
- 2026-05-20 PASS 49 minutes
- 2026-05-21

### Error 2026-05-21T01:02:47+00:00
```
2026-05-21T01:02:47.0672107Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2026-05-21T01:02:47.0673157Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-863621583229091135
2026-05-21T01:03:56.3160207Z     resource_test.go:22: 
2026-05-21T01:03:56.3161434Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-21T01:03:56.3163219Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-21T01:03:56.3165321Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-21T01:03:56.3167307Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-21T01:03:56.3169208Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clusteroutagesimulation/resource_test.go:33
2026-05-21T01:03:56.3171196Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clusteroutagesimulation/resource_test.go:22
2026-05-21T01:03:56.3172091Z         	Error:      	Received unexpected error:
2026-05-21T01:03:56.3173939Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:03:56.3175083Z         	Test:       	TestAccOutageSimulationCluster_SingleRegion_basic
2026-05-21T01:03:56.3176989Z         	Messages:   	Project creation failed: test-acc-tf-p-863621583229091135, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:03:56.3178269Z --- FAIL: TestAccOutageSimulationCluster_SingleRegion_basic (69.25s)
```

- 2026-05-22 PASS an hour
- 2026-05-23 PASS 47 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 51 minutes
- 2026-05-26 PASS 45 minutes
- 2026-05-27 PASS an hour
- 2026-05-28

### Error 2026-05-28T00:56:54+00:00
```
2026-05-28T00:56:54.6209209Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2026-05-28T00:56:54.6210484Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-3582459597879848910
2026-05-28T00:58:05.3361788Z     resource_test.go:22: 
2026-05-28T00:58:05.3364043Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T00:58:05.3367546Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T00:58:05.3371112Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T00:58:05.3373273Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-28T00:58:05.3375511Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clusteroutagesimulation/resource_test.go:33
2026-05-28T00:58:05.3377825Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clusteroutagesimulation/resource_test.go:22
2026-05-28T00:58:05.3378931Z         	Error:      	Received unexpected error:
2026-05-28T00:58:05.3381124Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T00:58:05.3382330Z         	Test:       	TestAccOutageSimulationCluster_SingleRegion_basic
2026-05-28T00:58:05.3384112Z         	Messages:   	Project creation failed: test-acc-tf-p-3582459597879848910, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T00:58:05.3385321Z --- FAIL: TestAccOutageSimulationCluster_SingleRegion_basic (70.72s)
```

- 2026-05-29 PASS 54 minutes
- 2026-05-30

### Error 2026-05-30T01:00:04+00:00
```
2026-05-30T01:00:04.1027885Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2026-05-30T01:00:04.1029609Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-4452160461233646293
2026-05-30T01:01:07.6622608Z     resource_test.go:22: 
2026-05-30T01:01:07.6624622Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:01:07.6629278Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:01:07.6633939Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:01:07.6637155Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-30T01:01:07.6639877Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clusteroutagesimulation/resource_test.go:33
2026-05-30T01:01:07.6641935Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clusteroutagesimulation/resource_test.go:22
2026-05-30T01:01:07.6642805Z         	Error:      	Received unexpected error:
2026-05-30T01:01:07.6644784Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:01:07.6645927Z         	Test:       	TestAccOutageSimulationCluster_SingleRegion_basic
2026-05-30T01:01:07.6647850Z         	Messages:   	Project creation failed: test-acc-tf-p-4452160461233646293, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:01:07.6649390Z --- FAIL: TestAccOutageSimulationCluster_SingleRegion_basic (63.56s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS an hour
- 2026-06-02 PASS 42 minutes
- 2026-06-03 PASS 57 minutes
- 2026-06-04 PASS an hour
- 2026-06-05 PASS 45 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 48 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 46 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 46 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 45 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
