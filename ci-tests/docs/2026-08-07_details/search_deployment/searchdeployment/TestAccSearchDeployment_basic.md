# search_deployment/searchdeployment/TestAccSearchDeployment_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 25) FAIL(x 7)
Success rate: 78.12%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:49](#error-2026-07-09t0049060000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6a4ef002a854726a1e9812b9/clusters | dev | out_of_capacity | 35.09s
[2026-07-10 00:49](#error-2026-07-10t0049380000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6a50419eaea6151790a3604c/clusters/test-acc-tf-c-3563069566730200403 | dev | flaky_500 | 6390.01s
[2026-07-11 00:43](#error-2026-07-11t0043180000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 82.03s
[2026-07-14 00:41](#error-2026-07-14t0041140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.07s
[2026-07-16 00:42](#error-2026-07-16t0042320000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.01s
[2026-07-21 00:44](#error-2026-07-21t0044380000) |  | dev | flaky_500 | 33.00s
[2026-07-23 00:45](#error-2026-07-23t0045080000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.04s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:49:06+00:00
```
2026-07-09T00:49:06.4235539Z === RUN   TestAccSearchDeployment_basic
2026-07-09T00:49:40.7372027Z === CONT  TestAccSearchDeployment_basic
2026-07-09T00:49:42.5438953Z === NAME  TestAccSearchDeployment_basic
2026-07-09T00:49:42.5440303Z     resource_test.go:39: Step 1/4 error: Error running apply: exit status 1
2026-07-09T00:49:42.5440727Z         
2026-07-09T00:49:42.5441004Z         Error: Error in create
2026-07-09T00:49:42.5441282Z         
2026-07-09T00:49:42.5441640Z           with mongodbatlas_advanced_cluster.test,
2026-07-09T00:49:42.5442657Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "test":
2026-07-09T00:49:42.5443328Z           13: 	resource "mongodbatlas_advanced_cluster" "test" {
2026-07-09T00:49:42.5443678Z         
2026-07-09T00:49:42.5444125Z         cluster name: test-acc-tf-c-7823055727432771217, API error details:
2026-07-09T00:49:42.5444860Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a4ef002a854726a1e9812b9/clusters
2026-07-09T00:49:42.5445597Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-07-09T00:49:42.5446293Z         region is currently out of capacity for the requested instance size. Reason:
2026-07-09T00:49:42.5447067Z         Conflict. Params: [], BadRequestDetail: 
2026-07-09T00:49:42.5937474Z --- FAIL: TestAccSearchDeployment_basic (35.94s)
```

- 2026-07-10

### Error 2026-07-10T00:49:38+00:00
```
2026-07-10T00:49:38.5214671Z === RUN   TestAccSearchDeployment_basic
2026-07-10T00:49:38.8164836Z === CONT  TestAccSearchDeployment_basic
2026-07-10T01:22:52.4436259Z   diagnostic_detail=
2026-07-10T01:22:52.4438759Z   
2026-07-10T01:41:21.1667632Z   diagnostic_detail=
2026-07-10T01:41:21.1670136Z    tf_req_id=bfc0bdab-537b-0258-4385-409c9bf4d326
2026-07-10T02:36:08.9059941Z === NAME  TestAccSearchDeployment_basic
2026-07-10T02:36:08.9062654Z     resource_test.go:39: Error running post-test destroy, there may be dangling resources: exit status 1
2026-07-10T02:36:08.9063193Z         
2026-07-10T02:36:08.9063476Z         Error: Error in delete
2026-07-10T02:36:08.9063754Z         
2026-07-10T02:36:08.9064446Z         cluster name: test-acc-tf-c-3563069566730200403, API error details:
2026-07-10T02:36:08.9065388Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a50419eaea6151790a3604c/clusters/test-acc-tf-c-3563069566730200403
2026-07-10T02:36:08.9066217Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2026-07-10T02:36:08.9066868Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2026-07-10T02:36:08.9067317Z         BadRequestDetail: 
2026-07-10T02:36:08.9067651Z --- FAIL: TestAccSearchDeployment_basic (6390.09s)
```

- 2026-07-11

### Error 2026-07-11T00:43:18+00:00
```
2026-07-11T00:43:18.0735302Z === RUN   TestAccSearchDeployment_basic
2026-07-11T00:44:40.3824438Z     shared_resource.go:160: 
2026-07-11T00:44:40.3826276Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:44:40.3829403Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-11T00:44:40.3832673Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-11T00:44:40.3835259Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-11T00:44:40.3837819Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-11T00:44:40.3840495Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchdeployment/resource_test.go:35
2026-07-11T00:44:40.3841874Z         	Error:      	Received unexpected error:
2026-07-11T00:44:40.3844353Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:44:40.3845432Z         	Test:       	TestAccSearchDeployment_basic
2026-07-11T00:44:40.3847234Z         	Messages:   	Project creation failed: test-acc-tf-p-6613231543130097351, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:44:40.3848461Z --- FAIL: TestAccSearchDeployment_basic (82.31s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS an hour
- 2026-07-14

### Error 2026-07-14T00:41:14+00:00
```
2026-07-14T00:41:14.2468823Z === RUN   TestAccSearchDeployment_basic
2026-07-14T00:42:15.9197436Z     shared_resource.go:160: 
2026-07-14T00:42:15.9200514Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-14T00:42:15.9202657Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-14T00:42:15.9204882Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-14T00:42:15.9206782Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-14T00:42:15.9208738Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-14T00:42:15.9210729Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchdeployment/resource_test.go:35
2026-07-14T00:42:15.9211587Z         	Error:      	Received unexpected error:
2026-07-14T00:42:15.9213717Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T00:42:15.9214815Z         	Test:       	TestAccSearchDeployment_basic
2026-07-14T00:42:15.9216634Z         	Messages:   	Project creation failed: test-acc-tf-p-6165148424710644610, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T00:42:15.9217855Z --- FAIL: TestAccSearchDeployment_basic (61.67s)
```

- 2026-07-15 PASS an hour
- 2026-07-16

### Error 2026-07-16T00:42:32+00:00
```
2026-07-16T00:42:32.7728843Z === RUN   TestAccSearchDeployment_basic
2026-07-16T00:43:37.8595392Z     shared_resource.go:160: 
2026-07-16T00:43:37.8598859Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-16T00:43:37.8601289Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-16T00:43:37.8603762Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-16T00:43:37.8605826Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-16T00:43:37.8607875Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-16T00:43:37.8609738Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchdeployment/resource_test.go:35
2026-07-16T00:43:37.8610547Z         	Error:      	Received unexpected error:
2026-07-16T00:43:37.8612655Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:43:37.8613701Z         	Test:       	TestAccSearchDeployment_basic
2026-07-16T00:43:37.8615430Z         	Messages:   	Project creation failed: test-acc-tf-p-3372786746214382995, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:43:37.8616590Z --- FAIL: TestAccSearchDeployment_basic (65.09s)
```

- 2026-07-17 PASS an hour
- 2026-07-18 PASS an hour
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:44:38+00:00
```
2026-07-21T00:44:38.5558109Z === RUN   TestAccSearchDeployment_basic
2026-07-21T00:45:11.5681722Z     shared_resource.go:160: 
2026-07-21T00:45:11.5685393Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:45:11.5687638Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-21T00:45:11.5689083Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-21T00:45:11.5690718Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-21T00:45:11.5692190Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-21T00:45:11.5693711Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchdeployment/resource_test.go:35
2026-07-21T00:45:11.5694365Z         	Error:      	Received unexpected error:
2026-07-21T00:45:11.5695091Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2026-07-21T00:45:11.5695569Z         	Test:       	TestAccSearchDeployment_basic
2026-07-21T00:45:11.5696395Z         	Messages:   	Project creation failed: test-acc-tf-p-7774403763543949268, err: (503 Service Unavailable) failed to decode response body: undefined response type
2026-07-21T00:45:11.5696972Z --- FAIL: TestAccSearchDeployment_basic (33.01s)
```

- 2026-07-22 PASS an hour
- 2026-07-23

### Error 2026-07-23T00:45:08+00:00
```
2026-07-23T00:45:08.3354156Z === RUN   TestAccSearchDeployment_basic
2026-07-23T00:46:09.7245694Z     shared_resource.go:160: 
2026-07-23T00:46:09.7248366Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:46:09.7251788Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-23T00:46:09.7254681Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-23T00:46:09.7257797Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-23T00:46:09.7260169Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-23T00:46:09.7262189Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchdeployment/resource_test.go:35
2026-07-23T00:46:09.7263082Z         	Error:      	Received unexpected error:
2026-07-23T00:46:09.7265173Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:46:09.7266294Z         	Test:       	TestAccSearchDeployment_basic
2026-07-23T00:46:09.7268384Z         	Messages:   	Project creation failed: test-acc-tf-p-3851305568641875977, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:46:09.7269661Z --- FAIL: TestAccSearchDeployment_basic (61.39s)
```

- 2026-07-24 PASS 3 hours
- 2026-07-25 PASS an hour
- 2026-07-26: MISSING
- 2026-07-27 PASS 3 hours
- 2026-07-28 PASS 3 hours
- 2026-07-29 PASS an hour
- 2026-07-30 PASS 2 hours
- 2026-07-31 PASS 54 minutes
- 2026-08-01 PASS 52 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 52 minutes
- 2026-08-04 PASS 50 minutes
- 2026-08-05 PASS 52 minutes
- 2026-08-06 PASS 49 minutes
- 2026-08-07 PASS 59 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS an hour
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS an hour
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS an hour
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS an hour
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 50 minutes
  - PASS 57 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 51 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
