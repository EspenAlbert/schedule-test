# search_index/searchindex/TestAccSearchIndex_withSynonyms Test Details
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
- 2026-09-08 PASS 18 seconds
- 2026-09-09 PASS 14 seconds
- 2026-09-10

### Error 2026-09-10T00:54:51+00:00
```
2026-09-10T00:54:51.5190730Z === RUN   TestAccSearchIndex_withSynonyms
2026-09-10T00:54:51.5190934Z     resource_search_index_test.go:58: 
2026-09-10T00:54:51.5191459Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-10T00:54:51.5192622Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:58
2026-09-10T00:54:51.5193062Z         	Error:      	Received unexpected error:
2026-09-10T00:54:51.5193701Z         	            	sample dataset load 6aa1ff9f4ab31ba345271413 failed for cluster 6aa1fc755b8d9510e88fe9bf:test-acc-tf-c-3763408995681801236
2026-09-10T00:54:51.5194088Z         	Test:       	TestAccSearchIndex_withSynonyms
2026-09-10T00:54:51.5194294Z --- FAIL: TestAccSearchIndex_withSynonyms (0.00s)
```

- 2026-09-11
  - PASS 12 seconds
  - FAIL unknown

### Error 2026-09-11T07:04:19+00:00
```
2026-09-11T07:04:19.3707434Z === RUN   TestAccSearchIndex_withSynonyms
2026-09-11T07:04:19.3707729Z     resource_search_index_test.go:58: 
2026-09-11T07:04:19.3708495Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-11T07:04:19.3710026Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:58
2026-09-11T07:04:19.3710659Z         	Error:      	Received unexpected error:
2026-09-11T07:04:19.3711784Z         	            	sample dataset load 6aa3a61a821e0ea7a4600136 failed for cluster 6aa3a262f7fcc4bbebf4a2f2:test-acc-tf-c-5278600439134204922
2026-09-11T07:04:19.3712385Z         	Test:       	TestAccSearchIndex_withSynonyms
2026-09-11T07:04:19.3712677Z --- FAIL: TestAccSearchIndex_withSynonyms (0.00s)
```

- 2026-09-12 PASS 14 seconds
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
- 2026-09-13 PASS 12 seconds
- 2026-09-14: MISSING
