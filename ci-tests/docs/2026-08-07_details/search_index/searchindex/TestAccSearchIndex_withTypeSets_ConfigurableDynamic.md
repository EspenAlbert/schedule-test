# search_index/searchindex/TestAccSearchIndex_withTypeSets_ConfigurableDynamic Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:54](#error-2026-07-09t0054370000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.10s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:54:37+00:00
```
2026-07-09T00:54:37.9855744Z === RUN   TestAccSearchIndex_withTypeSets_ConfigurableDynamic
2026-07-09T00:54:37.9856700Z     resource_search_index_test.go:76: Creating execution project (1): test-acc-tf-p-2427255370970160634
2026-07-09T00:55:41.9766389Z     resource_search_index_test.go:76: 
2026-07-09T00:55:41.9768515Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:55:41.9772405Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:55:41.9775360Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:55:41.9778006Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-09T00:55:41.9780524Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:76
2026-07-09T00:55:41.9782149Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-09T00:55:41.9782973Z         	Error:      	Received unexpected error:
2026-07-09T00:55:41.9785413Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:55:41.9787445Z         	Test:       	TestAccSearchIndex_withTypeSets_ConfigurableDynamic
2026-07-09T00:55:41.9789430Z         	Messages:   	Project creation failed: test-acc-tf-p-2427255370970160634, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:55:41.9790709Z --- FAIL: TestAccSearchIndex_withTypeSets_ConfigurableDynamic (63.99s)
```

- 2026-07-10 PASS 17 seconds
- 2026-07-11 PASS 18 seconds
- 2026-07-12: MISSING
- 2026-07-13 PASS 18 seconds
- 2026-07-14 PASS 20 seconds
- 2026-07-15 PASS 18 seconds
- 2026-07-16 PASS 17 seconds
- 2026-07-17 PASS 18 seconds
- 2026-07-18 PASS 18 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21 PASS 18 seconds
- 2026-07-22 PASS 18 seconds
- 2026-07-23 PASS 15 seconds
- 2026-07-24 PASS 17 seconds
- 2026-07-25 PASS 14 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 16 seconds
- 2026-07-28 PASS 14 seconds
- 2026-07-29 PASS 16 seconds
- 2026-07-30 PASS 16 seconds
- 2026-07-31 PASS 16 seconds
- 2026-08-01 PASS 16 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 17 seconds
- 2026-08-04 PASS 15 seconds
- 2026-08-05 PASS 19 seconds
- 2026-08-06 PASS 15 seconds
- 2026-08-07 PASS 16 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 19 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 16 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 18 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 17 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 14 seconds
  - PASS 18 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 16 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
