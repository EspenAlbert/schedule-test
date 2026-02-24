# stream/streamprocessor/TestAccStreamProcessor_clusterType Test Details
# Found 34 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 27) FAIL(x 7)
Success rate: 79.41%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 02:36](#error-2026-01-31t0236300000) |  | dev | timeout | 3600.08s
[2026-02-02 03:39](#error-2026-02-02t0339100000) |  | dev | timeout | 3600.07s
[2026-02-03 00:40](#error-2026-02-03t0040330000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143c3e3c7fce2317e5c9e/clusters | dev | out_of_capacity | 0.06s
[2026-02-03 01:51](#error-2026-02-03t0151060000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6981544c8303bfa55c821874/clusters | dev | out_of_capacity | 2.04s
[2026-02-06 00:56](#error-2026-02-06t0056320000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 1.08s
[2026-02-12 18:47](#error-2026-02-12t1847260000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s
[2026-02-24 01:09](#error-2026-02-24t0109130000) |  | dev | flaky_500 | 4.09s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 10 seconds
- 2026-01-27 PASS 12 seconds
- 2026-01-28 PASS 8 seconds
- 2026-01-29 PASS 6 seconds
- 2026-01-30: MISSING
- 2026-01-31

### Error 2026-01-31T02:36:30+00:00
```
2026-01-31T02:36:30.9870860Z === RUN   TestAccStreamProcessor_clusterType
2026-01-31T02:36:30.9871417Z     resource_test.go:316: Creating execution cluster: test-acc-tf-c-3006375517441149521
2026-01-31T02:36:30.9872100Z     resource_test.go:316: 
2026-01-31T02:36:30.9873007Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2026-01-31T02:36:30.9874765Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:181
2026-01-31T02:36:30.9876624Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:316
2026-01-31T02:36:30.9877422Z         	Error:      	Received unexpected error:
2026-01-31T02:36:30.9878529Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-01-31T02:36:30.9879160Z         	Test:       	TestAccStreamProcessor_clusterType
2026-01-31T02:36:30.9880251Z         	Messages:   	Cluster creation failed: test-acc-tf-c-3006375517441149521, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-01-31T02:36:30.9881033Z --- FAIL: TestAccStreamProcessor_clusterType (3600.77s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T03:39:10+00:00
```
2026-02-02T03:39:10.8707785Z === RUN   TestAccStreamProcessor_clusterType
2026-02-02T03:39:10.8708283Z     resource_test.go:316: Creating execution cluster: test-acc-tf-c-7362711581527772068
2026-02-02T03:39:10.8708724Z     resource_test.go:316: 
2026-02-02T03:39:10.8709527Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2026-02-02T03:39:10.8711113Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:181
2026-02-02T03:39:10.8712765Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:316
2026-02-02T03:39:10.8713480Z         	Error:      	Received unexpected error:
2026-02-02T03:39:10.8714511Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-02-02T03:39:10.8715083Z         	Test:       	TestAccStreamProcessor_clusterType
2026-02-02T03:39:10.8716067Z         	Messages:   	Cluster creation failed: test-acc-tf-c-7362711581527772068, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-02-02T03:39:10.8716794Z --- FAIL: TestAccStreamProcessor_clusterType (3600.68s)
```

- 2026-02-03
  - FAIL a moment

### Error 2026-02-03T00:40:33+00:00
```
2026-02-03T00:40:33.6615726Z === RUN   TestAccStreamProcessor_clusterType
2026-02-03T00:40:33.6616690Z     resource_test.go:316: Creating execution cluster: test-acc-tf-c-3211950418767750785
2026-02-03T00:40:33.6617500Z     resource_test.go:316: 
2026-02-03T00:40:33.6619098Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:46
2026-02-03T00:40:33.6622309Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:203
2026-02-03T00:40:33.6626101Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:316
2026-02-03T00:40:33.6627532Z         	Error:      	Received unexpected error:
2026-02-03T00:40:33.6632012Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143c3e3c7fce2317e5c9e/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:40:33.6634233Z         	Test:       	TestAccStreamProcessor_clusterType
2026-02-03T00:40:33.6638255Z         	Messages:   	Cluster creation failed: test-acc-tf-c-3211950418767750785, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143c3e3c7fce2317e5c9e/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:40:33.6640726Z --- FAIL: TestAccStreamProcessor_clusterType (0.56s)
```

  - FAIL 2 seconds

### Error 2026-02-03T01:51:06+00:00
```
2026-02-03T01:51:06.0663367Z === RUN   TestAccStreamProcessor_clusterType
2026-02-03T01:51:06.0663903Z     resource_test.go:316: Creating execution cluster: test-acc-tf-c-1036416788372932491
2026-02-03T01:51:06.0664375Z     resource_test.go:316: 
2026-02-03T01:51:06.0665258Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:46
2026-02-03T01:51:06.0667027Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:203
2026-02-03T01:51:06.0669003Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:316
2026-02-03T01:51:06.0669793Z         	Error:      	Received unexpected error:
2026-02-03T01:51:06.0672493Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/6981544c8303bfa55c821874/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T01:51:06.0673759Z         	Test:       	TestAccStreamProcessor_clusterType
2026-02-03T01:51:06.0675865Z         	Messages:   	Cluster creation failed: test-acc-tf-c-1036416788372932491, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6981544c8303bfa55c821874/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T01:51:06.0677271Z --- FAIL: TestAccStreamProcessor_clusterType (2.39s)
```

- 2026-02-04 PASS 8 seconds
- 2026-02-05 PASS 9 seconds
- 2026-02-06

### Error 2026-02-06T00:56:32+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2026-02-06T00:56:32.608000+00:00-TestAccStreamProcessor_clusterType',confidence=1.0,ts_when='17 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2026-02-06T00:56:32.6086564Z === RUN   TestAccStreamProcessor_clusterType
2026-02-06T00:56:32.6090253Z === CONT  TestAccStreamProcessor_clusterType
2026-02-06T00:56:32.6211811Z === NAME  TestAccStreamProcessor_clusterType
2026-02-06T00:56:32.6212305Z     resource_test.go:322: Step 1/1 error: Error running apply: exit status 1
2026-02-06T00:56:32.6212687Z         
2026-02-06T00:56:32.6212969Z         Error: error creating resource
2026-02-06T00:56:32.6213241Z         
2026-02-06T00:56:32.6213607Z           with mongodbatlas_stream_processor.processor,
2026-02-06T00:56:32.6214325Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-06T00:56:32.6215058Z           12: 	resource "mongodbatlas_stream_processor" "processor" {
2026-02-06T00:56:32.6215402Z         
2026-02-06T00:56:32.6216139Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6985378713125e9acd98a203/streams/test-acc-tf-s-69697366263959401/processor
2026-02-06T00:56:32.6216972Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-02-06T00:56:32.6217657Z         Detail: Streams Processor with this name (new-processor6oumm) had a problem
2026-02-06T00:56:32.6218348Z         occur: connection named ClusterConnectionSrc6oumm does not exist. Check
2026-02-06T00:56:32.6219022Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2026-02-06T00:56:32.6219705Z         [new-processor6oumm connection named ClusterConnectionSrc6oumm does not
2026-02-06T00:56:32.6220315Z         exist. Check sp.listConnections() for available connections],
2026-02-06T00:56:32.6220947Z         BadRequestDetail: 
2026-02-06T00:56:32.6221260Z --- FAIL: TestAccStreamProcessor_clusterType (1.77s)
```

- 2026-02-07
  - PASS 9 seconds
  - PASS 7 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS 8 seconds
- 2026-02-10 PASS 8 seconds
- 2026-02-11 PASS 8 seconds
- 2026-02-12
  - PASS 9 seconds
  - FAIL a moment

### Error 2026-02-12T18:47:26+00:00
```
2026-02-12T18:47:26.8393362Z === RUN   TestAccStreamProcessor_clusterType
2026-02-12T18:47:26.8394569Z     resource_test.go:315: Creating execution project (1): test-acc-tf-p-5310074697717118303
2026-02-12T18:47:26.8395416Z     resource_test.go:315: 
2026-02-12T18:47:26.8396908Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-02-12T18:47:26.8400184Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:151
2026-02-12T18:47:26.8403320Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:107
2026-02-12T18:47:26.8406440Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:223
2026-02-12T18:47:26.8409746Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:315
2026-02-12T18:47:26.8411771Z         	            				/opt/hostedtoolcache/go/1.25.7/x64/src/runtime/asm_amd64.s:1693
2026-02-12T18:47:26.8412565Z         	Error:      	Received unexpected error:
2026-02-12T18:47:26.8416946Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:26.8419227Z         	Test:       	TestAccStreamProcessor_clusterType
2026-02-12T18:47:26.8422838Z         	Messages:   	Project creation failed: test-acc-tf-p-5310074697717118303, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:26.8425203Z --- FAIL: TestAccStreamProcessor_clusterType (0.24s)
```

- 2026-02-13 PASS 9 seconds
- 2026-02-14 PASS 7 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 8 seconds
- 2026-02-17 PASS 9 seconds
- 2026-02-18 PASS 8 seconds
- 2026-02-19 PASS 10 seconds
- 2026-02-20 PASS 12 seconds
- 2026-02-21 PASS 9 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 8 seconds
- 2026-02-24

### Error 2026-02-24T01:09:13+00:00
```
2026-02-24T01:09:13.2454086Z === RUN   TestAccStreamProcessor_clusterType
2026-02-24T01:09:13.2458105Z === CONT  TestAccStreamProcessor_clusterType
2026-02-24T01:09:13.2522768Z === NAME  TestAccStreamProcessor_clusterType
2026-02-24T01:09:13.2523263Z     resource_test.go:322: Step 1/1 error: Error running apply: exit status 1
2026-02-24T01:09:13.2523645Z         
2026-02-24T01:09:13.2523920Z         Error: error creating resource
2026-02-24T01:09:13.2524198Z         
2026-02-24T01:09:13.2524556Z           with mongodbatlas_stream_processor.processor,
2026-02-24T01:09:13.2525267Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-24T01:09:13.2525929Z           12: 	resource "mongodbatlas_stream_processor" "processor" {
2026-02-24T01:09:13.2526290Z         
2026-02-24T01:09:13.2526751Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-02-24T01:09:13.2527174Z         type
2026-02-24T01:09:13.2536284Z   
2026-02-24T01:09:13.2541928Z --- FAIL: TestAccStreamProcessor_clusterType (4.90s)
```


## QA Environment
### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 9 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 10 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 11 seconds
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 6 seconds
- 2026-02-16: MISSING
- 2026-02-17 PASS 7 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 11 seconds
- 2026-02-23: MISSING
- 2026-02-24: MISSING
