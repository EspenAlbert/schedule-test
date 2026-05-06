# autogen_slow/clusterapi/TestAccClusterAPI_moveBasic Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 25) FAIL(x 9)
Success rate: 73.53%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-07 03:59](#error-2026-04-07t0359330000) |  | dev | timeout | 11631.08s
[2026-04-11 01:11](#error-2026-04-11t0111110000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 77.09s
[2026-04-14 01:16](#error-2026-04-14t0116350000) |  | dev | flaky_500 | 64.08s
[2026-04-16 00:51](#error-2026-04-16t0051280000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e0326a1ec945fedc720d11/clusters | dev | out_of_capacity | 34.06s
[2026-04-18 01:18](#error-2026-04-18t0118320000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.09s
[2026-04-21 01:22](#error-2026-04-21t0122270000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.02s
[2026-04-23 01:30](#error-2026-04-23t0130180000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e96ce99f2fb28355958fac/clusters | dev | out_of_capacity | 85.08s
[2026-04-25 01:14](#error-2026-04-25t0114360000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 71.03s
[2026-04-30 01:00](#error-2026-04-30t0100090000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 91.06s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07

### Error 2026-04-07T03:59:33+00:00
```
2026-04-07T03:59:33.8996512Z === RUN   TestAccClusterAPI_moveBasic
2026-04-07T03:59:33.8997646Z     move_test.go:18: Creating execution project (1): test-acc-tf-p-8916693450091860674
2026-04-07T03:59:33.9002584Z === CONT  TestAccClusterAPI_moveBasic
2026-04-07T03:59:33.9025915Z === NAME  TestAccClusterAPI_moveBasic
2026-04-07T03:59:33.9026854Z     move_test.go:21: Error running post-test destroy, there may be dangling resources: exit status 1
2026-04-07T03:59:33.9027681Z         
2026-04-07T03:59:33.9028278Z         Error: Error waiting for changes in Delete
2026-04-07T03:59:33.9028689Z         
2026-04-07T03:59:33.9029162Z         timeout while waiting for state to become 'DELETED' (last state: 'DELETING',
2026-04-07T03:59:33.9029608Z         timeout: 3h0m0s)
2026-04-07T03:59:33.9029896Z --- FAIL: TestAccClusterAPI_moveBasic (11631.78s)
```

- 2026-04-08 PASS 19 minutes
- 2026-04-09 PASS 28 minutes
- 2026-04-10 PASS 23 minutes
- 2026-04-11

### Error 2026-04-11T01:11:11+00:00
```
2026-04-11T01:11:11.8381905Z === RUN   TestAccClusterAPI_moveBasic
2026-04-11T01:11:11.8383167Z     move_test.go:18: Creating execution project (1): test-acc-tf-p-8465851446259295683
2026-04-11T01:11:11.8383830Z     move_test.go:18: 
2026-04-11T01:11:11.8385057Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-11T01:11:11.8387637Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-11T01:11:11.8390440Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-11T01:11:11.8393371Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/clusterapi/move_test.go:18
2026-04-11T01:11:11.8394107Z         	Error:      	Received unexpected error:
2026-04-11T01:11:11.8395804Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T01:11:11.8397090Z         	Test:       	TestAccClusterAPI_moveBasic
2026-04-11T01:11:11.8398904Z         	Messages:   	Project creation failed: test-acc-tf-p-8465851446259295683, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T01:11:11.8399999Z --- FAIL: TestAccClusterAPI_moveBasic (77.90s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 24 minutes
- 2026-04-14

### Error 2026-04-14T01:16:35+00:00
```
2026-04-14T01:16:35.4006079Z === RUN   TestAccClusterAPI_moveBasic
2026-04-14T01:16:35.4007162Z     move_test.go:18: Creating execution project (1): test-acc-tf-p-9030215033657824041
2026-04-14T01:16:35.4008073Z     move_test.go:18: 
2026-04-14T01:16:35.4009137Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-14T01:16:35.4011130Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-14T01:16:35.4013284Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-14T01:16:35.4015278Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/clusterapi/move_test.go:18
2026-04-14T01:16:35.4016764Z         	Error:      	Received unexpected error:
2026-04-14T01:16:35.4017759Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2026-04-14T01:16:35.4018390Z         	Test:       	TestAccClusterAPI_moveBasic
2026-04-14T01:16:35.4019535Z         	Messages:   	Project creation failed: test-acc-tf-p-9030215033657824041, err: (503 Service Unavailable) failed to decode response body: undefined response type
2026-04-14T01:16:35.4020294Z --- FAIL: TestAccClusterAPI_moveBasic (64.83s)
```

- 2026-04-15 PASS 18 minutes
- 2026-04-16

### Error 2026-04-16T00:51:28+00:00
```
2026-04-16T00:51:28.4988429Z === RUN   TestAccClusterAPI_moveBasic
2026-04-16T00:51:28.4989068Z     move_test.go:18: Creating execution project (1): test-acc-tf-p-8010562489354199943
2026-04-16T00:51:28.4992418Z === CONT  TestAccClusterAPI_moveBasic
2026-04-16T00:51:28.5008220Z === NAME  TestAccClusterAPI_moveBasic
2026-04-16T00:51:28.5008881Z     move_test.go:21: Step 1/2 error: Error running apply: exit status 1
2026-04-16T00:51:28.5009341Z         
2026-04-16T00:51:28.5009687Z         Error: Error calling API in Create
2026-04-16T00:51:28.5010010Z         
2026-04-16T00:51:28.5010402Z           with mongodbatlas_cluster_old_api.old,
2026-04-16T00:51:28.5011209Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster_old_api" "old":
2026-04-16T00:51:28.5011991Z           12: 		resource "mongodbatlas_cluster_old_api" "old" {
2026-04-16T00:51:28.5012354Z         
2026-04-16T00:51:28.5012969Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e0326a1ec945fedc720d11/clusters
2026-04-16T00:51:28.5013832Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-16T00:51:28.5014879Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-16T00:51:28.5015516Z         Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:51:28.5030973Z    test_name=TestAccClusterAPI_deleteOnCreateTimeout test_terraform_path=/home/runner/work/_temp/07a94067-8b72-419e-8ef2-f058dcfd4977/terraform
2026-04-16T00:51:28.5040407Z --- FAIL: TestAccClusterAPI_moveBasic (34.56s)
```

- 2026-04-17 PASS 20 minutes
- 2026-04-18

### Error 2026-04-18T01:18:32+00:00
```
2026-04-18T01:18:32.4103498Z === RUN   TestAccClusterAPI_moveBasic
2026-04-18T01:18:32.4104391Z     move_test.go:18: Creating execution project (1): test-acc-tf-p-2295174913474555744
2026-04-18T01:18:32.4104907Z     move_test.go:18: 
2026-04-18T01:18:32.4105832Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-18T01:18:32.4107676Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-18T01:18:32.4109670Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-18T01:18:32.4111516Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/clusterapi/move_test.go:18
2026-04-18T01:18:32.4112288Z         	Error:      	Received unexpected error:
2026-04-18T01:18:32.4114676Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-18T01:18:32.4115706Z         	Test:       	TestAccClusterAPI_moveBasic
2026-04-18T01:18:32.4117743Z         	Messages:   	Project creation failed: test-acc-tf-p-2295174913474555744, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-18T01:18:32.4118933Z --- FAIL: TestAccClusterAPI_moveBasic (70.91s)
```

- 2026-04-19: MISSING
- 2026-04-20 PASS 16 minutes
- 2026-04-21

### Error 2026-04-21T01:22:27+00:00
```
2026-04-21T01:22:27.1634577Z === RUN   TestAccClusterAPI_moveBasic
2026-04-21T01:22:27.1635646Z     move_test.go:18: Creating execution project (1): test-acc-tf-p-7568642760515381492
2026-04-21T01:22:27.1636522Z     move_test.go:18: 
2026-04-21T01:22:27.1637695Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-21T01:22:27.1640175Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-21T01:22:27.1642377Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-21T01:22:27.1644828Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/clusterapi/move_test.go:18
2026-04-21T01:22:27.1645782Z         	Error:      	Received unexpected error:
2026-04-21T01:22:27.1647990Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-21T01:22:27.1649068Z         	Test:       	TestAccClusterAPI_moveBasic
2026-04-21T01:22:27.1651245Z         	Messages:   	Project creation failed: test-acc-tf-p-7568642760515381492, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-21T01:22:27.1652474Z --- FAIL: TestAccClusterAPI_moveBasic (62.16s)
```

- 2026-04-22 PASS 58 minutes
- 2026-04-23

### Error 2026-04-23T01:30:18+00:00
```
2026-04-23T01:30:18.6991078Z === RUN   TestAccClusterAPI_moveBasic
2026-04-23T01:30:18.6992199Z     move_test.go:18: Creating execution project (1): test-acc-tf-p-4513051298395803942
2026-04-23T01:30:18.6995290Z === CONT  TestAccClusterAPI_moveBasic
2026-04-23T01:30:18.7008825Z === NAME  TestAccClusterAPI_moveBasic
2026-04-23T01:30:18.7009306Z     move_test.go:21: Step 1/2 error: Error running apply: exit status 1
2026-04-23T01:30:18.7009671Z         
2026-04-23T01:30:18.7010003Z         Error: Error calling API in Create
2026-04-23T01:30:18.7010288Z         
2026-04-23T01:30:18.7010806Z           with mongodbatlas_cluster_old_api.old,
2026-04-23T01:30:18.7011465Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster_old_api" "old":
2026-04-23T01:30:18.7012087Z           12: 		resource "mongodbatlas_cluster_old_api" "old" {
2026-04-23T01:30:18.7012413Z         
2026-04-23T01:30:18.7012935Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e96ce99f2fb28355958fac/clusters
2026-04-23T01:30:18.7013638Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-23T01:30:18.7014304Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-23T01:30:18.7014806Z         Conflict. Params: [], BadRequestDetail: 
2026-04-23T01:30:18.7015142Z --- FAIL: TestAccClusterAPI_moveBasic (85.84s)
```

- 2026-04-24 PASS 20 minutes
- 2026-04-25

### Error 2026-04-25T01:14:36+00:00
```
2026-04-25T01:14:36.8007760Z === RUN   TestAccClusterAPI_moveBasic
2026-04-25T01:14:36.8009152Z     move_test.go:18: Creating execution project (1): test-acc-tf-p-3278698112984099211
2026-04-25T01:14:36.8010031Z     move_test.go:18: 
2026-04-25T01:14:36.8011061Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-25T01:14:36.8012923Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-25T01:14:36.8014776Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-25T01:14:36.8016616Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/clusterapi/move_test.go:18
2026-04-25T01:14:36.8017685Z         	Error:      	Received unexpected error:
2026-04-25T01:14:36.8020089Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-25T01:14:36.8021166Z         	Test:       	TestAccClusterAPI_moveBasic
2026-04-25T01:14:36.8023161Z         	Messages:   	Project creation failed: test-acc-tf-p-3278698112984099211, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-25T01:14:36.8024384Z --- FAIL: TestAccClusterAPI_moveBasic (71.33s)
```

- 2026-04-26: MISSING
- 2026-04-27 PASS 17 minutes
- 2026-04-28 PASS 18 minutes
- 2026-04-29 PASS 19 minutes
- 2026-04-30

### Error 2026-04-30T01:00:09+00:00
```
2026-04-30T01:00:09.4696500Z === RUN   TestAccClusterAPI_moveBasic
2026-04-30T01:00:09.4697293Z     move_test.go:18: Creating execution project (1): test-acc-tf-p-989252311509898329
2026-04-30T01:00:09.4698020Z     move_test.go:18: 
2026-04-30T01:00:09.4699569Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T01:00:09.4703078Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T01:00:09.4707405Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T01:00:09.4710906Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/clusterapi/move_test.go:18
2026-04-30T01:00:09.4712039Z         	Error:      	Received unexpected error:
2026-04-30T01:00:09.4714048Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:00:09.4715085Z         	Test:       	TestAccClusterAPI_moveBasic
2026-04-30T01:00:09.4717477Z         	Messages:   	Project creation failed: test-acc-tf-p-989252311509898329, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:00:09.4718680Z --- FAIL: TestAccClusterAPI_moveBasic (91.59s)
```

- 2026-05-01 PASS 38 minutes
- 2026-05-02 PASS 20 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 17 minutes
- 2026-05-05 PASS 31 minutes
- 2026-05-06 PASS 27 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 18 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 18 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 19 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 17 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 20 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 19 minutes
- 2026-05-04 PASS 17 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 19 minutes
