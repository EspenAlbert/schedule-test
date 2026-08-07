# search_index/searchindex/TestAccSearchIndex_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:49](#error-2026-07-09t0049000000) |  | dev | flaky_500 | 67.03s
[2026-07-11 00:43](#error-2026-07-11t0043070000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.04s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:49:00+00:00
```
2026-07-09T00:49:00.8980538Z === RUN   TestAccSearchIndex_basic
2026-07-09T00:49:00.8986485Z     resource_search_index_test.go:17: Creating execution project (1): test-acc-tf-p-7174559984868866958
2026-07-09T00:50:08.1533113Z     resource_search_index_test.go:17: 
2026-07-09T00:50:08.1534544Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:50:08.1537411Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:50:08.1540324Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:50:08.1542509Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-09T00:50:08.1544833Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:250
2026-07-09T00:50:08.1547543Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:17
2026-07-09T00:50:08.1548525Z         	Error:      	Received unexpected error:
2026-07-09T00:50:08.1549597Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2026-07-09T00:50:08.1550249Z         	Test:       	TestAccSearchIndex_basic
2026-07-09T00:50:08.1551553Z         	Messages:   	Project creation failed: test-acc-tf-p-7174559984868866958, err: (503 Service Unavailable) failed to decode response body: undefined response type
2026-07-09T00:50:08.1552305Z --- FAIL: TestAccSearchIndex_basic (67.26s)
```

- 2026-07-10 PASS 13 seconds
- 2026-07-11

### Error 2026-07-11T00:43:07+00:00
```
2026-07-11T00:43:07.4058079Z === RUN   TestAccSearchIndex_basic
2026-07-11T00:43:07.4061717Z     resource_search_index_test.go:17: Creating execution project (1): test-acc-tf-p-3952482870596956966
2026-07-11T00:44:08.8445603Z     resource_search_index_test.go:17: 
2026-07-11T00:44:08.8447248Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:44:08.8450358Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:44:08.8452809Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:44:08.8454845Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-11T00:44:08.8456880Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:250
2026-07-11T00:44:08.8458889Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:17
2026-07-11T00:44:08.8459720Z         	Error:      	Received unexpected error:
2026-07-11T00:44:08.8461619Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:44:08.8462616Z         	Test:       	TestAccSearchIndex_basic
2026-07-11T00:44:08.8464475Z         	Messages:   	Project creation failed: test-acc-tf-p-3952482870596956966, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:44:08.8465575Z --- FAIL: TestAccSearchIndex_basic (61.44s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 16 seconds
- 2026-07-14 PASS 16 minutes
- 2026-07-15 PASS 14 seconds
- 2026-07-16 PASS 44 minutes
- 2026-07-17 PASS 15 seconds
- 2026-07-18 PASS 15 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21 PASS 14 minutes
- 2026-07-22 PASS 13 seconds
- 2026-07-23 PASS 47 minutes
- 2026-07-24 PASS 14 seconds
- 2026-07-25 PASS 15 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS 13 seconds
- 2026-07-28 PASS 32 minutes
- 2026-07-29 PASS 14 seconds
- 2026-07-30 PASS 51 minutes
- 2026-07-31 PASS 14 seconds
- 2026-08-01 PASS 15 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 14 seconds
- 2026-08-04 PASS 15 minutes
- 2026-08-05 PASS 14 seconds
- 2026-08-06 PASS 15 minutes
- 2026-08-07 PASS 14 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 12 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 14 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 13 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 15 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 15 minutes
  - PASS 16 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 15 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
