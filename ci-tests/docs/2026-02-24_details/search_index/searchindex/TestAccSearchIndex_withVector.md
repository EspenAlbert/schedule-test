# search_index/searchindex/TestAccSearchIndex_withVector Test Details
# Found 30 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 28) FAIL(x 2)
Success rate: 93.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-03 00:39](#error-2026-02-03t0039230000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143b5e3c7fce2317dcdd2/clusters | dev | out_of_capacity | 0.05s
[2026-02-24 00:50](#error-2026-02-24t0050170000) |  | dev | flaky_500 | 1.08s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 7 seconds
- 2026-01-27 PASS 6 seconds
- 2026-01-28 PASS 7 seconds
- 2026-01-29 PASS 7 seconds
- 2026-01-30 PASS 8 seconds
- 2026-01-31: MISSING
- 2026-02-01: MISSING
- 2026-02-02: MISSING
- 2026-02-03

### Error 2026-02-03T00:39:23+00:00
```
2026-02-03T00:39:23.8008561Z === RUN   TestAccSearchIndex_withVector
2026-02-03T00:39:23.8009174Z     resource_search_index_test.go:193: Creating execution cluster: test-acc-tf-c-1986050486718865724
2026-02-03T00:39:24.3098733Z     resource_search_index_test.go:193: 
2026-02-03T00:39:24.3100599Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:46
2026-02-03T00:39:24.3103225Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:203
2026-02-03T00:39:24.3106056Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:342
2026-02-03T00:39:24.3108708Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:193
2026-02-03T00:39:24.3109662Z         	Error:      	Received unexpected error:
2026-02-03T00:39:24.3112854Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b5e3c7fce2317dcdd2/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:39:24.3114297Z         	Test:       	TestAccSearchIndex_withVector
2026-02-03T00:39:24.3116741Z         	Messages:   	Cluster creation failed: test-acc-tf-c-1986050486718865724, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b5e3c7fce2317dcdd2/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:39:24.3118275Z --- FAIL: TestAccSearchIndex_withVector (0.51s)
```

- 2026-02-04 PASS 9 seconds
- 2026-02-05 PASS 8 seconds
- 2026-02-06 PASS 7 seconds
- 2026-02-07 PASS 7 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS 8 seconds
- 2026-02-10 PASS 6 seconds
- 2026-02-11 PASS 8 seconds
- 2026-02-12 PASS 7 seconds
- 2026-02-13 PASS 6 seconds
- 2026-02-14 PASS 6 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 7 seconds
- 2026-02-17 PASS 7 seconds
- 2026-02-18 PASS 6 seconds
- 2026-02-19 PASS 7 seconds
- 2026-02-20 PASS 8 seconds
- 2026-02-21 PASS 5 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 7 seconds
- 2026-02-24

### Error 2026-02-24T00:50:17+00:00
```
2026-02-24T00:50:17.1604673Z === RUN   TestAccSearchIndex_withVector
2026-02-24T01:03:37.6537723Z === CONT  TestAccSearchIndex_withVector
2026-02-24T01:03:39.3158051Z === NAME  TestAccSearchIndex_withVector
2026-02-24T01:03:39.3159239Z     resource_search_index_test.go:193: Step 1/1 error: Error running apply: exit status 1
2026-02-24T01:03:39.3160547Z         
2026-02-24T01:03:39.3161921Z         Error: error creating index: (503 Service Unavailable) failed to decode response body: undefined response type
2026-02-24T01:03:39.3198239Z         
2026-02-24T01:03:39.3198954Z           with mongodbatlas_search_index.test,
2026-02-24T01:03:39.3210679Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2026-02-24T01:03:39.3212070Z           12: 		resource "mongodbatlas_search_index" "test" {
2026-02-24T01:03:39.3212835Z         
2026-02-24T01:03:39.4395805Z --- FAIL: TestAccSearchIndex_withVector (1.79s)
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
- 2026-02-01 PASS 6 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 5 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 8 seconds
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 8 seconds
- 2026-02-16: MISSING
- 2026-02-17 PASS 8 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 6 seconds
- 2026-02-23: MISSING
- 2026-02-24: MISSING
