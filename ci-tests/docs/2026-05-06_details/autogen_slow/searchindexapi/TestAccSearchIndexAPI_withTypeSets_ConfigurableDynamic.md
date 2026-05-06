# autogen_slow/searchindexapi/TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 32) FAIL(x 2)
Success rate: 94.12%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-16 00:52](#error-2026-04-16t0052020000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e0326b1ec945fedc72100e/clusters | dev | out_of_capacity | 0.08s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 25 minutes
- 2026-04-08 PASS 25 minutes
- 2026-04-09 PASS 21 minutes
- 2026-04-10 PASS 24 minutes
- 2026-04-11 PASS 26 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 25 minutes
- 2026-04-14 PASS 27 minutes
- 2026-04-15 PASS 22 minutes
- 2026-04-16

### Error 2026-04-16T00:52:02+00:00
```
2026-04-16T00:52:02.3984368Z === RUN   TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-04-16T00:52:02.3984826Z     resource_test.go:115: Creating execution cluster: test-acc-tf-c-1842517828505803437
2026-04-16T00:52:02.3985309Z     resource_test.go:115: 
2026-04-16T00:52:02.3985979Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:46
2026-04-16T00:52:02.3987309Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:194
2026-04-16T00:52:02.3988712Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:115
2026-04-16T00:52:02.3989309Z         	Error:      	Received unexpected error:
2026-04-16T00:52:02.3991180Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e0326b1ec945fedc72100e/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:52:02.3992174Z         	Test:       	TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-04-16T00:52:02.3993781Z         	Messages:   	Cluster creation failed: test-acc-tf-c-1842517828505803437, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e0326b1ec945fedc72100e/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:52:02.3994990Z --- FAIL: TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic (0.78s)
```

- 2026-04-17 PASS 27 minutes
- 2026-04-18 PASS 24 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 24 minutes
- 2026-04-21 PASS 22 minutes
- 2026-04-22 PASS 23 minutes
- 2026-04-23 PASS 20 minutes
- 2026-04-24 PASS 24 minutes
- 2026-04-25 PASS 18 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 20 minutes
- 2026-04-28 PASS 21 minutes
- 2026-04-29 PASS 15 minutes
- 2026-04-30 PASS 23 minutes
- 2026-05-01 PASS 23 minutes
- 2026-05-02 PASS 26 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 24 minutes
- 2026-05-05 PASS 22 minutes
- 2026-05-06 PASS 26 minutes

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-04-12 01:36](#error-2026-04-12t0136250000) |  | qa | 738.03s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 20 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12

### Error 2026-04-12T01:36:25+00:00
```
2026-04-12T01:36:25.7733986Z === RUN   TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-04-12T01:36:25.7739770Z === CONT  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-04-12T01:36:25.7752038Z === NAME  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-04-12T01:36:25.7752589Z     resource_test.go:118: Step 2/3 error: Error running apply: exit status 1
2026-04-12T01:36:25.7752977Z         
2026-04-12T01:36:25.7753308Z         Error: Error waiting for changes in Update
2026-04-12T01:36:25.7753606Z         
2026-04-12T01:36:25.7753941Z           with mongodbatlas_search_index_api.test,
2026-04-12T01:36:25.7754728Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-04-12T01:36:25.7755379Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-04-12T01:36:25.7755705Z         
2026-04-12T01:36:25.7756146Z         unexpected state 'DELETED', wanted target 'READY, STEADY'. last error:
2026-04-12T01:36:25.7756554Z         %!s(<nil>)
2026-04-12T01:36:25.7756910Z --- FAIL: TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic (738.32s)
```

- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 25 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 27 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 26 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 36 minutes
- 2026-05-04 PASS 38 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 33 minutes
