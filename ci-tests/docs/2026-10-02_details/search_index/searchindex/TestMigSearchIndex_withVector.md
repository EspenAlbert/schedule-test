# search_index/searchindex/TestMigSearchIndex_withVector Test Details
# Found 22 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 19) FAIL(x 3)
Success rate: 86.36%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-11 07:04](#error-2026-09-11t0704190000) |  | dev | 0.00s
[2026-09-23 00:55](#error-2026-09-23t0055570000) |  | dev | 0.00s
[2026-09-23 08:40](#error-2026-09-23t0840080000) |  | dev | 0.00s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 18 seconds
- 2026-09-03: MISSING
- 2026-09-04 PASS 19 seconds
- 2026-09-05: MISSING
- 2026-09-06: MISSING
- 2026-09-07 PASS 17 seconds
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
- 2026-09-15: MISSING
- 2026-09-16 PASS 17 seconds
- 2026-09-17: MISSING
- 2026-09-18 PASS 17 seconds
- 2026-09-19: MISSING
- 2026-09-20: MISSING
- 2026-09-21 PASS 17 seconds
- 2026-09-22: MISSING
- 2026-09-23
  - FAIL unknown

### Error 2026-09-23T00:55:57+00:00
```
2026-09-23T00:55:57.0900794Z === RUN   TestMigSearchIndex_withVector
2026-09-23T00:55:57.0901452Z     resource_search_index_migration_test.go:15: 
2026-09-23T00:55:57.0902767Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-23T00:55:57.0906336Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:368
2026-09-23T00:55:57.0910454Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_migration_test.go:15
2026-09-23T00:55:57.0911400Z         	Error:      	Received unexpected error:
2026-09-23T00:55:57.0913286Z         	            	sample dataset load 6ab32324aad6f205c425e84b failed for cluster 6ab31ffd653bb1f6237cf617:test-acc-tf-c-6409859478682822162: Target cluster does not have enough free space to import dataset
2026-09-23T00:55:57.0914610Z         	Test:       	TestMigSearchIndex_withVector
2026-09-23T00:55:57.0915000Z --- FAIL: TestMigSearchIndex_withVector (0.00s)
```

  - FAIL unknown

### Error 2026-09-23T08:40:08+00:00
```
2026-09-23T08:40:08.2777803Z === RUN   TestMigSearchIndex_withVector
2026-09-23T08:40:08.2778255Z     resource_search_index_migration_test.go:15: 
2026-09-23T08:40:08.2779437Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-23T08:40:08.2781992Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:368
2026-09-23T08:40:08.2784852Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_migration_test.go:15
2026-09-23T08:40:08.2785844Z         	Error:      	Received unexpected error:
2026-09-23T08:40:08.2787878Z         	            	sample dataset load 6ab3902caa941871fb3d3e92 failed for cluster 6ab38d03f8a29abe2358b1c1:test-acc-tf-c-1663078595888584301: Target cluster does not have enough free space to import dataset
2026-09-23T08:40:08.2788636Z         	Test:       	TestMigSearchIndex_withVector
2026-09-23T08:40:08.2788954Z --- FAIL: TestMigSearchIndex_withVector (0.00s)
```

- 2026-09-24: MISSING
- 2026-09-25 PASS 16 seconds
- 2026-09-26: MISSING
- 2026-09-27: MISSING
- 2026-09-28 PASS 11 seconds
- 2026-09-29: MISSING
- 2026-09-30 PASS 16 seconds
- 2026-10-01: MISSING
- 2026-10-02 PASS 12 seconds

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 18 seconds
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 18 seconds
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 17 seconds
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 17 seconds
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 12 seconds
- 2026-09-28: MISSING
- 2026-09-29 PASS 13 seconds
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
