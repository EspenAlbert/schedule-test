# autogen_slow/clusterapi/TestAccClusterAPI_basic Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 19) FAIL(x 12)
Success rate: 61.29%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:02](#error-2026-05-09t0102470000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 99.03s
[2026-05-15 01:15](#error-2026-05-15t0115530000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/6a066f75bf5881c97de6b2db/clusters/test-acc-tf-c-6664944788252140359 | dev |  | 1105.08s
[2026-05-16 01:10](#error-2026-05-16t0110490000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/6a07c0738f63c00f867dde33/clusters/test-acc-tf-c-5259075037293569018 | dev |  | 893.08s
[2026-05-18 01:32](#error-2026-05-18t0132120000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/6a0a64fddece59bebe11dad4/clusters/test-acc-tf-c-2799188553845634220 | dev |  | 1538.04s
[2026-05-19 01:06](#error-2026-05-19t0106130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 88.08s
[2026-05-20 01:25](#error-2026-05-20t0125180000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/6a0d085655959eec416da055/clusters/test-acc-tf-c-7699612222042829654 | dev |  | 1315.07s
[2026-05-21 01:27](#error-2026-05-21t0127270000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/6a0e5a0ca2ebcd59a4f0d41b/clusters/test-acc-tf-c-4573530947478154824 | dev |  | 1317.03s
[2026-05-26 02:15](#error-2026-05-26t0215080000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.00s
[2026-05-28 01:01](#error-2026-05-28t0101280000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 96.01s
[2026-05-30 01:05](#error-2026-05-30t0105140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.08s
[2026-06-02 01:14](#error-2026-06-02t0114070000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.02s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 47 minutes
  - PASS 59 minutes
- 2026-05-08 PASS 41 minutes
- 2026-05-09

### Error 2026-05-09T01:02:47+00:00
```
2026-05-09T01:02:47.9510347Z === RUN   TestAccClusterAPI_basic
2026-05-09T01:02:47.9510877Z     resource_test.go:18: Creating execution project (1): test-acc-tf-p-5213701575360721182
2026-05-09T01:02:47.9511502Z     resource_test.go:18: 
2026-05-09T01:02:47.9512400Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:02:47.9514142Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:02:47.9515900Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:02:47.9517704Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/clusterapi/resource_test.go:18
2026-05-09T01:02:47.9518463Z         	Error:      	Received unexpected error:
2026-05-09T01:02:47.9520553Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:02:47.9522128Z         	Test:       	TestAccClusterAPI_basic
2026-05-09T01:02:47.9523831Z         	Messages:   	Project creation failed: test-acc-tf-p-5213701575360721182, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:02:47.9524909Z --- FAIL: TestAccClusterAPI_basic (99.34s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 32 minutes
- 2026-05-12 PASS 28 minutes
- 2026-05-13 PASS 34 minutes
- 2026-05-14 PASS 47 minutes
- 2026-05-15

### Error 2026-05-15T01:15:53+00:00
```
2026-05-15T01:15:53.3599553Z === RUN   TestAccClusterAPI_basic
2026-05-15T01:15:53.3601183Z === CONT  TestAccClusterAPI_basic
2026-05-15T01:15:53.3627547Z === NAME  TestAccClusterAPI_basic
2026-05-15T01:15:53.3628116Z     resource_test.go:21: Step 2/4 error: Error running apply: exit status 1
2026-05-15T01:15:53.3628509Z         
2026-05-15T01:15:53.3628803Z         Error: Error calling API in Update
2026-05-15T01:15:53.3629085Z         
2026-05-15T01:15:53.3629401Z           with mongodbatlas_cluster_api.test,
2026-05-15T01:15:53.3630048Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster_api" "test":
2026-05-15T01:15:53.3630653Z           12: 		resource "mongodbatlas_cluster_api" "test" {
2026-05-15T01:15:53.3630980Z         
2026-05-15T01:15:53.3631853Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a066f75bf5881c97de6b2db/clusters/test-acc-tf-c-6664944788252140359
2026-05-15T01:15:53.3632676Z         PATCH: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2026-05-15T01:15:53.3633282Z         Reason: No Capacity. Reason: Bad Request. Params: [No Capacity],
2026-05-15T01:15:53.3633705Z         BadRequestDetail: 
2026-05-15T01:15:53.3634342Z --- FAIL: TestAccClusterAPI_basic (1105.77s)
```

- 2026-05-16

### Error 2026-05-16T01:10:49+00:00
```
2026-05-16T01:10:49.6360731Z === RUN   TestAccClusterAPI_basic
2026-05-16T01:10:49.6362836Z === CONT  TestAccClusterAPI_basic
2026-05-16T01:10:49.6363683Z   diagnostic_detail=
2026-05-16T01:10:49.6368875Z    diagnostic_severity=ERROR diagnostic_summary="Unable to Move Resource State" tf_rpc=MoveResourceState tf_req_id=53052126-e3f8-5ee1-5e12-87d5cb7faa29 tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_proto_version=6.11 tf_resource_type=mongodbatlas_cluster_api
2026-05-16T01:10:49.6387650Z === NAME  TestAccClusterAPI_basic
2026-05-16T01:10:49.6388128Z     resource_test.go:21: Step 2/4 error: Error running apply: exit status 1
2026-05-16T01:10:49.6388514Z         
2026-05-16T01:10:49.6388834Z         Error: Error calling API in Update
2026-05-16T01:10:49.6389126Z         
2026-05-16T01:10:49.6389487Z           with mongodbatlas_cluster_api.test,
2026-05-16T01:10:49.6390138Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster_api" "test":
2026-05-16T01:10:49.6390756Z           12: 		resource "mongodbatlas_cluster_api" "test" {
2026-05-16T01:10:49.6391090Z         
2026-05-16T01:10:49.6391795Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a07c0738f63c00f867dde33/clusters/test-acc-tf-c-5259075037293569018
2026-05-16T01:10:49.6392603Z         PATCH: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2026-05-16T01:10:49.6393210Z         Reason: No Capacity. Reason: Bad Request. Params: [No Capacity],
2026-05-16T01:10:49.6393628Z         BadRequestDetail: 
2026-05-16T01:10:49.6393934Z --- FAIL: TestAccClusterAPI_basic (893.77s)
```

- 2026-05-17: MISSING
- 2026-05-18

### Error 2026-05-18T01:32:12+00:00
```
2026-05-18T01:32:12.1846068Z === RUN   TestAccClusterAPI_basic
2026-05-18T01:32:12.1847683Z === CONT  TestAccClusterAPI_basic
2026-05-18T01:32:12.1874912Z === NAME  TestAccClusterAPI_basic
2026-05-18T01:32:12.1875488Z     resource_test.go:21: Step 2/4 error: Error running apply: exit status 1
2026-05-18T01:32:12.1875868Z         
2026-05-18T01:32:12.1876157Z         Error: Error calling API in Update
2026-05-18T01:32:12.1876441Z         
2026-05-18T01:32:12.1876750Z           with mongodbatlas_cluster_api.test,
2026-05-18T01:32:12.1877388Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster_api" "test":
2026-05-18T01:32:12.1877988Z           12: 		resource "mongodbatlas_cluster_api" "test" {
2026-05-18T01:32:12.1878303Z         
2026-05-18T01:32:12.1879165Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a0a64fddece59bebe11dad4/clusters/test-acc-tf-c-2799188553845634220
2026-05-18T01:32:12.1879975Z         PATCH: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2026-05-18T01:32:12.1880579Z         Reason: No Capacity. Reason: Bad Request. Params: [No Capacity],
2026-05-18T01:32:12.1880985Z         BadRequestDetail: 
2026-05-18T01:32:12.1881271Z --- FAIL: TestAccClusterAPI_basic (1538.37s)
```

- 2026-05-19

### Error 2026-05-19T01:06:13+00:00
```
2026-05-19T01:06:13.4549680Z === RUN   TestAccClusterAPI_basic
2026-05-19T01:06:13.4550117Z     resource_test.go:18: Creating execution project (1): test-acc-tf-p-8052569519215731715
2026-05-19T01:06:13.4550495Z     resource_test.go:18: 
2026-05-19T01:06:13.4551195Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:06:13.4552776Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:06:13.4554295Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:06:13.4555941Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/clusterapi/resource_test.go:18
2026-05-19T01:06:13.4556566Z         	Error:      	Received unexpected error:
2026-05-19T01:06:13.4558061Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:06:13.4558807Z         	Test:       	TestAccClusterAPI_basic
2026-05-19T01:06:13.4560115Z         	Messages:   	Project creation failed: test-acc-tf-p-8052569519215731715, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:06:13.4560974Z --- FAIL: TestAccClusterAPI_basic (88.82s)
```

- 2026-05-20

### Error 2026-05-20T01:25:18+00:00
```
2026-05-20T01:25:18.2412215Z === RUN   TestAccClusterAPI_basic
2026-05-20T01:25:18.2415631Z === CONT  TestAccClusterAPI_basic
2026-05-20T01:25:18.2418912Z   diagnostic_detail=
2026-05-20T01:25:18.2424479Z    diagnostic_severity=ERROR
2026-05-20T01:25:18.2442104Z === NAME  TestAccClusterAPI_basic
2026-05-20T01:25:18.2443069Z     resource_test.go:21: Step 2/4 error: Error running apply: exit status 1
2026-05-20T01:25:18.2443772Z         
2026-05-20T01:25:18.2444301Z         Error: Error calling API in Update
2026-05-20T01:25:18.2444799Z         
2026-05-20T01:25:18.2445142Z           with mongodbatlas_cluster_api.test,
2026-05-20T01:25:18.2445791Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster_api" "test":
2026-05-20T01:25:18.2446399Z           12: 		resource "mongodbatlas_cluster_api" "test" {
2026-05-20T01:25:18.2446710Z         
2026-05-20T01:25:18.2447610Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a0d085655959eec416da055/clusters/test-acc-tf-c-7699612222042829654
2026-05-20T01:25:18.2448439Z         PATCH: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2026-05-20T01:25:18.2449040Z         Reason: No Capacity. Reason: Bad Request. Params: [No Capacity],
2026-05-20T01:25:18.2449462Z         BadRequestDetail: 
2026-05-20T01:25:18.2450105Z --- FAIL: TestAccClusterAPI_basic (1315.74s)
```

- 2026-05-21

### Error 2026-05-21T01:27:27+00:00
```
2026-05-21T01:27:27.5712864Z === RUN   TestAccClusterAPI_basic
2026-05-21T01:27:27.5715181Z === CONT  TestAccClusterAPI_basic
2026-05-21T01:27:27.5717836Z   diagnostic_detail=
2026-05-21T01:27:27.5721733Z   
2026-05-21T01:27:27.5739193Z === NAME  TestAccClusterAPI_basic
2026-05-21T01:27:27.5739656Z     resource_test.go:21: Step 2/4 error: Error running apply: exit status 1
2026-05-21T01:27:27.5740029Z         
2026-05-21T01:27:27.5740336Z         Error: Error calling API in Update
2026-05-21T01:27:27.5740623Z         
2026-05-21T01:27:27.5740939Z           with mongodbatlas_cluster_api.test,
2026-05-21T01:27:27.5741573Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster_api" "test":
2026-05-21T01:27:27.5742168Z           12: 		resource "mongodbatlas_cluster_api" "test" {
2026-05-21T01:27:27.5742482Z         
2026-05-21T01:27:27.5743287Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a0e5a0ca2ebcd59a4f0d41b/clusters/test-acc-tf-c-4573530947478154824
2026-05-21T01:27:27.5744115Z         PATCH: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2026-05-21T01:27:27.5744787Z         Reason: No Capacity. Reason: Bad Request. Params: [No Capacity],
2026-05-21T01:27:27.5745233Z         BadRequestDetail: 
2026-05-21T01:27:27.5745529Z --- FAIL: TestAccClusterAPI_basic (1317.32s)
```

- 2026-05-22 PASS 51 minutes
- 2026-05-23 PASS 33 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 34 minutes
- 2026-05-26

### Error 2026-05-26T02:15:08+00:00
```
2026-05-26T02:15:08.3739753Z === RUN   TestAccClusterAPI_basic
2026-05-26T02:15:08.3740280Z     resource_test.go:18: Creating execution project (1): test-acc-tf-p-4815991876791382638
2026-05-26T02:15:08.3740749Z     resource_test.go:18: 
2026-05-26T02:15:08.3741797Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-26T02:15:08.3743542Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-26T02:15:08.3745474Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-26T02:15:08.3747280Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/clusterapi/resource_test.go:18
2026-05-26T02:15:08.3748038Z         	Error:      	Received unexpected error:
2026-05-26T02:15:08.3749932Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:15:08.3750878Z         	Test:       	TestAccClusterAPI_basic
2026-05-26T02:15:08.3752756Z         	Messages:   	Project creation failed: test-acc-tf-p-4815991876791382638, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:15:08.3753849Z --- FAIL: TestAccClusterAPI_basic (70.01s)
```

- 2026-05-27 PASS 53 minutes
- 2026-05-28

### Error 2026-05-28T01:01:28+00:00
```
2026-05-28T01:01:28.8766416Z === RUN   TestAccClusterAPI_basic
2026-05-28T01:01:28.8766952Z     resource_test.go:18: Creating execution project (1): test-acc-tf-p-84008963795450521
2026-05-28T01:01:28.8767420Z     resource_test.go:18: 
2026-05-28T01:01:28.8768288Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:01:28.8770219Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:01:28.8772457Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:01:28.8774222Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/clusterapi/resource_test.go:18
2026-05-28T01:01:28.8774985Z         	Error:      	Received unexpected error:
2026-05-28T01:01:28.8776829Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:01:28.8777753Z         	Test:       	TestAccClusterAPI_basic
2026-05-28T01:01:28.8779391Z         	Messages:   	Project creation failed: test-acc-tf-p-84008963795450521, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:01:28.8780458Z --- FAIL: TestAccClusterAPI_basic (96.13s)
```

- 2026-05-29 PASS 35 minutes
- 2026-05-30

### Error 2026-05-30T01:05:14+00:00
```
2026-05-30T01:05:14.4784894Z === RUN   TestAccClusterAPI_basic
2026-05-30T01:05:14.4785470Z     resource_test.go:18: Creating execution project (1): test-acc-tf-p-1660265554793661085
2026-05-30T01:05:14.4785978Z     resource_test.go:18: 
2026-05-30T01:05:14.4786906Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:05:14.4788702Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:05:14.4790632Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:05:14.4792638Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/clusterapi/resource_test.go:18
2026-05-30T01:05:14.4793432Z         	Error:      	Received unexpected error:
2026-05-30T01:05:14.4795400Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:05:14.4796410Z         	Test:       	TestAccClusterAPI_basic
2026-05-30T01:05:14.4798165Z         	Messages:   	Project creation failed: test-acc-tf-p-1660265554793661085, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:05:14.4799277Z --- FAIL: TestAccClusterAPI_basic (61.84s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS an hour
- 2026-06-02

### Error 2026-06-02T01:14:07+00:00
```
2026-06-02T01:14:07.1467935Z === RUN   TestAccClusterAPI_basic
2026-06-02T01:14:07.1468490Z     resource_test.go:18: Creating execution project (1): test-acc-tf-p-322260011425045419
2026-06-02T01:14:07.1468996Z     resource_test.go:18: 
2026-06-02T01:14:07.1469922Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:14:07.1472015Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:14:07.1473872Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:14:07.1475776Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/clusterapi/resource_test.go:18
2026-06-02T01:14:07.1476755Z         	Error:      	Received unexpected error:
2026-06-02T01:14:07.1478749Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:14:07.1479769Z         	Test:       	TestAccClusterAPI_basic
2026-06-02T01:14:07.1481527Z         	Messages:   	Project creation failed: test-acc-tf-p-322260011425045419, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:14:07.1482948Z --- FAIL: TestAccClusterAPI_basic (62.18s)
```

- 2026-06-03 PASS 46 minutes
- 2026-06-04 PASS 47 minutes
- 2026-06-05 PASS 34 minutes

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-24 01:23](#error-2026-05-24t0123030000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6a124e150756d72c2234720e/clusters | qa | out_of_capacity | 1.04s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 32 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 31 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24

### Error 2026-05-24T01:23:03+00:00
```
2026-05-24T01:23:03.5850135Z === RUN   TestAccClusterAPI_basic
2026-05-24T01:23:03.5852246Z === CONT  TestAccClusterAPI_basic
2026-05-24T01:23:03.5878965Z === NAME  TestAccClusterAPI_basic
2026-05-24T01:23:03.5879567Z     resource_test.go:21: Step 1/4 error: Error running apply: exit status 1
2026-05-24T01:23:03.5879983Z         
2026-05-24T01:23:03.5880326Z         Error: Error calling API in Create
2026-05-24T01:23:03.5880633Z         
2026-05-24T01:23:03.5880974Z           with mongodbatlas_cluster_api.test,
2026-05-24T01:23:03.5881900Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster_api" "test":
2026-05-24T01:23:03.5882551Z           12: 		resource "mongodbatlas_cluster_api" "test" {
2026-05-24T01:23:03.5882894Z         
2026-05-24T01:23:03.5890078Z === NAME  TestAccClusterAPI_basic
2026-05-24T01:23:03.5890692Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a124e150756d72c2234720e/clusters
2026-05-24T01:23:03.5891682Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-05-24T01:23:03.5892386Z         region is currently out of capacity for the requested instance size. Reason:
2026-05-24T01:23:03.5892924Z         Conflict. Params: [], BadRequestDetail: 
2026-05-24T01:23:03.5893281Z --- FAIL: TestAccClusterAPI_basic (1.38s)
```

- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 28 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
