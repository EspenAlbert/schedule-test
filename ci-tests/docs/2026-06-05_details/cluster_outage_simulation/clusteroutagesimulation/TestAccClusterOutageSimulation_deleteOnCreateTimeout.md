# cluster_outage_simulation/clusteroutagesimulation/TestAccClusterOutageSimulation_deleteOnCreateTimeout Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 25) FAIL(x 5)
Success rate: 83.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 00:54](#error-2026-05-09t0054470000) |  | dev |  | 2310.03s
[2026-05-15 00:56](#error-2026-05-15t0056450000) |  | dev |  | 269.01s
[2026-05-21 01:05](#error-2026-05-21t0105040000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.08s
[2026-05-28 00:59](#error-2026-05-28t0059230000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.03s
[2026-05-30 01:02](#error-2026-05-30t0102170000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.09s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS an hour
- 2026-05-08 PASS an hour
- 2026-05-09

### Error 2026-05-09T00:54:47+00:00
```
2026-05-09T00:54:47.1298530Z === RUN   TestAccClusterOutageSimulation_deleteOnCreateTimeout
2026-05-09T00:54:47.1302600Z === CONT  TestAccClusterOutageSimulation_deleteOnCreateTimeout
2026-05-09T00:54:52.1305531Z === NAME  TestAccClusterOutageSimulation_deleteOnCreateTimeout
2026-05-09T00:54:52.1309198Z     pre_check.go:46: Time before creating cluster: 2026-05-09T00:54:52.130177833Z, ProjectID: 69fe85d3987d495692ede161, Cluster name: test-acc-tf-c-1572719175152721607
2026-05-09T01:33:17.4574201Z === NAME  TestAccClusterOutageSimulation_deleteOnCreateTimeout
2026-05-09T01:33:17.4574946Z     resource_test.go:168: Error running post-test destroy, there may be dangling resources: exit status 1
2026-05-09T01:33:17.4575435Z         
2026-05-09T01:33:17.4575706Z         Error: Error in delete
2026-05-09T01:33:17.4575958Z         
2026-05-09T01:33:17.4576389Z         cluster name: test-acc-tf-c-1572719175152721607, API error details:
2026-05-09T01:33:17.4577278Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69fe85d3987d495692ede161/clusters/test-acc-tf-c-1572719175152721607
2026-05-09T01:33:17.4577963Z         DELETE: HTTP 400 Bad Request (Error code:
2026-05-09T01:33:17.4578525Z         "CANNOT_TERMINATE_CLUSTER_WITH_UNDERGOING_REGIONAL_OUTAGE_SIMULATION")
2026-05-09T01:33:17.4579190Z         Detail: Cannot terminate cluster test-acc-tf-c-1572719175152721607 in project
2026-05-09T01:33:17.4579871Z         test-acc-tf-p-5398115746768477662 because it is undergoing a regional outage
2026-05-09T01:33:17.4580512Z         simulation. End regional outage simulation and try again. Reason: Bad
2026-05-09T01:33:17.4581043Z         Request. Params: [test-acc-tf-c-1572719175152721607
2026-05-09T01:33:17.4581529Z         test-acc-tf-p-5398115746768477662], BadRequestDetail: 
2026-05-09T01:33:17.4581995Z --- FAIL: TestAccClusterOutageSimulation_deleteOnCreateTimeout (2310.33s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS an hour
- 2026-05-12 PASS 59 minutes
- 2026-05-13 PASS an hour
- 2026-05-14 PASS an hour
- 2026-05-15

### Error 2026-05-15T00:56:45+00:00
```
2026-05-15T00:56:45.6965856Z === RUN   TestAccClusterOutageSimulation_deleteOnCreateTimeout
2026-05-15T00:56:45.6970457Z === CONT  TestAccClusterOutageSimulation_deleteOnCreateTimeout
2026-05-15T00:57:10.7143286Z === NAME  TestAccClusterOutageSimulation_deleteOnCreateTimeout
2026-05-15T00:57:10.7147114Z     pre_check.go:46: Time before creating cluster: 2026-05-15T00:57:10.713982724Z, ProjectID: 6a066f4bbf5881c97de57bde, Cluster name: test-acc-tf-c-5434430591314481765
2026-05-15T01:01:09.8714843Z   
2026-05-15T01:01:14.7818169Z === NAME  TestAccClusterOutageSimulation_deleteOnCreateTimeout
2026-05-15T01:01:14.7819610Z     resource_test.go:168: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-05-15T01:01:14.7821675Z         
2026-05-15T01:01:14.7822259Z         Error: Error in create
2026-05-15T01:01:14.7822810Z         
2026-05-15T01:01:14.7823817Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-05-15T01:01:14.7825492Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-05-15T01:01:14.7827042Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-05-15T01:01:14.7828957Z         
2026-05-15T01:01:14.7829937Z         cluster=test-acc-tf-c-5434430591314481765 didn't reach desired state: IDLE,
2026-05-15T01:01:14.7830819Z         error:
2026-05-15T01:01:14.7832250Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a066f4bbf5881c97de57bde/clusters/test-acc-tf-c-5434430591314481765
2026-05-15T01:01:14.7833811Z         GET: HTTP 403 Forbidden (Error code: "") Detail:  Reason: . Params: [],
2026-05-15T01:01:14.7834687Z         BadRequestDetail: 
2026-05-15T01:01:14.8328156Z --- FAIL: TestAccClusterOutageSimulation_deleteOnCreateTimeout (269.14s)
```

- 2026-05-16 PASS 59 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS an hour
- 2026-05-19 PASS an hour
- 2026-05-20 PASS an hour
- 2026-05-21

### Error 2026-05-21T01:05:04+00:00
```
2026-05-21T01:05:04.7484165Z === RUN   TestAccClusterOutageSimulation_deleteOnCreateTimeout
2026-05-21T01:05:04.7484866Z     resource_test.go:165: Creating execution project (1): test-acc-tf-p-5418161609407414665
2026-05-21T01:06:13.4963637Z     resource_test.go:165: 
2026-05-21T01:06:13.4965593Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-21T01:06:13.4968939Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-21T01:06:13.4971005Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-21T01:06:13.4972731Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-21T01:06:13.4974628Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clusteroutagesimulation/resource_test.go:165
2026-05-21T01:06:13.4976060Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-21T01:06:13.4976649Z         	Error:      	Received unexpected error:
2026-05-21T01:06:13.4978467Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:06:13.4979664Z         	Test:       	TestAccClusterOutageSimulation_deleteOnCreateTimeout
2026-05-21T01:06:13.4981405Z         	Messages:   	Project creation failed: test-acc-tf-p-5418161609407414665, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:06:13.4982709Z --- FAIL: TestAccClusterOutageSimulation_deleteOnCreateTimeout (68.75s)
```

- 2026-05-22 PASS an hour
- 2026-05-23 PASS 59 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS an hour
- 2026-05-26 PASS an hour
- 2026-05-27 PASS an hour
- 2026-05-28

### Error 2026-05-28T00:59:23+00:00
```
2026-05-28T00:59:23.5585099Z === RUN   TestAccClusterOutageSimulation_deleteOnCreateTimeout
2026-05-28T00:59:23.5585735Z     resource_test.go:165: Creating execution project (1): test-acc-tf-p-8325871069653388806
2026-05-28T01:00:27.8867687Z     resource_test.go:165: 
2026-05-28T01:00:27.8870305Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:00:27.8873434Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:00:27.8875857Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:00:27.8878168Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-28T01:00:27.8880983Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clusteroutagesimulation/resource_test.go:165
2026-05-28T01:00:27.8901560Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-28T01:00:27.8902294Z         	Error:      	Received unexpected error:
2026-05-28T01:00:27.8904227Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:00:27.8905378Z         	Test:       	TestAccClusterOutageSimulation_deleteOnCreateTimeout
2026-05-28T01:00:27.8907162Z         	Messages:   	Project creation failed: test-acc-tf-p-8325871069653388806, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:00:27.8908391Z --- FAIL: TestAccClusterOutageSimulation_deleteOnCreateTimeout (64.33s)
```

- 2026-05-29 PASS an hour
- 2026-05-30

### Error 2026-05-30T01:02:17+00:00
```
2026-05-30T01:02:17.3872729Z === RUN   TestAccClusterOutageSimulation_deleteOnCreateTimeout
2026-05-30T01:02:17.3873404Z     resource_test.go:165: Creating execution project (1): test-acc-tf-p-2706907895327540625
2026-05-30T01:03:22.2892987Z     resource_test.go:165: 
2026-05-30T01:03:22.2894842Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:03:22.2897598Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:03:22.2900370Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:03:22.2902780Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-30T01:03:22.2905474Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clusteroutagesimulation/resource_test.go:165
2026-05-30T01:03:22.2907218Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-30T01:03:22.2907943Z         	Error:      	Received unexpected error:
2026-05-30T01:03:22.2910145Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:03:22.2911333Z         	Test:       	TestAccClusterOutageSimulation_deleteOnCreateTimeout
2026-05-30T01:03:22.2913178Z         	Messages:   	Project creation failed: test-acc-tf-p-2706907895327540625, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:03:22.2914452Z --- FAIL: TestAccClusterOutageSimulation_deleteOnCreateTimeout (64.91s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS an hour
- 2026-06-02 PASS 58 minutes
- 2026-06-03 PASS an hour
- 2026-06-04 PASS an hour
- 2026-06-05 PASS an hour

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS an hour
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS an hour
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS an hour
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS an hour
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
