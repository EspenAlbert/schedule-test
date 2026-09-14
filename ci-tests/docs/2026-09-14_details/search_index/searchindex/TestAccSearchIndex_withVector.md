# search_index/searchindex/TestAccSearchIndex_withVector Test Details
# Found 8 TestRuns in dev, qa from 2026-09-08 to 2026-09-14 from master branch: 1 unique tests, PASS(x 6) FAIL(x 2)
Success rate: 75.00%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-10 00:54](#error-2026-09-10t0054510000) |  | dev | 0.00s
[2026-09-11 07:04](#error-2026-09-11t0704190000) |  | dev | 0.00s

### Timeline
- 2026-09-07: MISSING
- 2026-09-08 PASS 17 seconds
- 2026-09-09 PASS 12 seconds
- 2026-09-10

### Error 2026-09-10T00:54:51+00:00
```
2026-09-10T00:54:51.5210175Z === RUN   TestAccSearchIndex_withVector
2026-09-10T00:54:51.5210521Z     resource_search_index_test.go:193: 
2026-09-10T00:54:51.5211511Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-10T00:54:51.5213468Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:367
2026-09-10T00:54:51.5214711Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:193
2026-09-10T00:54:51.5215147Z         	Error:      	Received unexpected error:
2026-09-10T00:54:51.5215793Z         	            	sample dataset load 6aa1ff9f4ab31ba345271413 failed for cluster 6aa1fc755b8d9510e88fe9bf:test-acc-tf-c-3763408995681801236
2026-09-10T00:54:51.5216329Z         	Test:       	TestAccSearchIndex_withVector
2026-09-10T00:54:51.5216536Z --- FAIL: TestAccSearchIndex_withVector (0.00s)
```

- 2026-09-11
  - PASS 13 seconds
  - FAIL unknown

### Error 2026-09-11T07:04:19+00:00
```
2026-09-11T07:04:19.3736328Z === RUN   TestAccSearchIndex_withVector
2026-09-11T07:04:19.3736618Z     resource_search_index_test.go:193: 
2026-09-11T07:04:19.3737424Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-11T07:04:19.3738982Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:367
2026-09-11T07:04:19.3740565Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:193
2026-09-11T07:04:19.3741217Z         	Error:      	Received unexpected error:
2026-09-11T07:04:19.3742356Z         	            	sample dataset load 6aa3a61a821e0ea7a4600136 failed for cluster 6aa3a262f7fcc4bbebf4a2f2:test-acc-tf-c-5278600439134204922
2026-09-11T07:04:19.3742942Z         	Test:       	TestAccSearchIndex_withVector
2026-09-11T07:04:19.3743232Z --- FAIL: TestAccSearchIndex_withVector (0.00s)
```

- 2026-09-12 PASS 13 seconds
- 2026-09-13: MISSING
- 2026-09-14 PASS 14 seconds

## QA Environment
### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 14 seconds
- 2026-09-14: MISSING
