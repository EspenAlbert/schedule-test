# stream/streamprocessor/TestAccStreamProcessor_clusterType Test Details
# Found 37 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 34) FAIL(x 3)
Success rate: 91.89%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-06 00:56](#error-2026-02-06t0056320000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 1.08s
[2026-02-12 18:47](#error-2026-02-12t1847260000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s
[2026-02-24 01:09](#error-2026-02-24t0109130000) |  | dev | flaky_500 | 4.09s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 9 seconds
- 2026-02-06

### Error 2026-02-06T00:56:32+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2026-02-06T00:56:32.608000+00:00-TestAccStreamProcessor_clusterType',confidence=1.0,ts_when='27 days ago')
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

- 2026-02-25
  - PASS 9 seconds
  - PASS 11 seconds
- 2026-02-26 PASS 10 seconds
- 2026-02-27
  - PASS 7 seconds
  - PASS 11 seconds
- 2026-02-28 PASS 11 seconds
- 2026-03-01: MISSING
- 2026-03-02 PASS 9 seconds
- 2026-03-03 PASS 9 seconds
- 2026-03-04 PASS 6 seconds
- 2026-03-05 PASS 10 seconds
- 2026-03-06 PASS 10 seconds

## QA Environment
### Timeline
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
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 10 seconds
- 2026-03-02: MISSING
- 2026-03-03 PASS 8 seconds
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
