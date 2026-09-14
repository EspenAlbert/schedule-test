# search_index/searchindex/TestMigSearchIndex_withVector Test Details
# Found 5 TestRuns in dev, qa from 2026-09-09 to 2026-09-14 from master branch: 1 unique tests, PASS(x 4) FAIL
Success rate: 80.00%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-11 07:04](#error-2026-09-11t0704190000) |  | dev | 0.00s

### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09 PASS 18 seconds
- 2026-09-10: MISSING
- 2026-09-11
  - PASS 18 minutes
  - FAIL unknown

### Error 2026-09-11T07:04:19+00:00
```
2026-09-11T07:04:19.3680638Z === RUN   TestMigSearchIndex_withVector
2026-09-11T07:04:19.3680978Z     resource_search_index_migration_test.go:15: 
2026-09-11T07:04:19.3682096Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-11T07:04:19.3684003Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:367
2026-09-11T07:04:19.3685662Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_migration_test.go:15
2026-09-11T07:04:19.3686339Z         	Error:      	Received unexpected error:
2026-09-11T07:04:19.3687334Z         	            	sample dataset load 6aa3a61a821e0ea7a4600136 failed for cluster 6aa3a262f7fcc4bbebf4a2f2:test-acc-tf-c-5278600439134204922
2026-09-11T07:04:19.3687910Z         	Test:       	TestMigSearchIndex_withVector
2026-09-11T07:04:19.3688219Z --- FAIL: TestMigSearchIndex_withVector (0.00s)
```

- 2026-09-12: MISSING
- 2026-09-13: MISSING
- 2026-09-14 PASS 16 seconds

## QA Environment
### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 18 seconds
- 2026-09-14: MISSING
