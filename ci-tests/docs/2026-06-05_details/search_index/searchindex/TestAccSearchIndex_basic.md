# search_index/searchindex/TestAccSearchIndex_basic Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 29) FAIL
Success rate: 96.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-21 01:02](#error-2026-05-21t0102480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.00s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 15 minutes
- 2026-05-08 PASS 14 seconds
- 2026-05-09 PASS 21 minutes
- 2026-05-10: MISSING
- 2026-05-11 PASS 14 seconds
- 2026-05-12 PASS 15 minutes
- 2026-05-13 PASS 15 seconds
- 2026-05-14 PASS 24 minutes
- 2026-05-15 PASS 12 seconds
- 2026-05-16 PASS 14 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 14 seconds
- 2026-05-19 PASS 14 minutes
- 2026-05-20 PASS 14 seconds
- 2026-05-21

### Error 2026-05-21T01:02:48+00:00
```
2026-05-21T01:02:48.0111657Z === RUN   TestAccSearchIndex_basic
2026-05-21T01:02:48.0113227Z     resource_search_index_test.go:17: Creating execution project (1): test-acc-tf-p-4470101848929629740
2026-05-21T01:03:53.0298172Z     resource_search_index_test.go:17: 
2026-05-21T01:03:53.0299351Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-21T01:03:53.0301244Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-21T01:03:53.0303500Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-21T01:03:53.0305377Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-05-21T01:03:53.0307668Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:250
2026-05-21T01:03:53.0309773Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:17
2026-05-21T01:03:53.0310597Z         	Error:      	Received unexpected error:
2026-05-21T01:03:53.0312496Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:03:53.0313484Z         	Test:       	TestAccSearchIndex_basic
2026-05-21T01:03:53.0315172Z         	Messages:   	Project creation failed: test-acc-tf-p-4470101848929629740, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:03:53.0316550Z --- FAIL: TestAccSearchIndex_basic (65.02s)
```

- 2026-05-22 PASS 14 seconds
- 2026-05-23 PASS 16 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 13 seconds
- 2026-05-26 PASS 15 minutes
- 2026-05-27 PASS 13 seconds
- 2026-05-28 PASS 18 minutes
- 2026-05-29 PASS 13 seconds
- 2026-05-30 PASS 14 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS 14 seconds
- 2026-06-02 PASS 14 minutes
- 2026-06-03 PASS 13 seconds
- 2026-06-04 PASS 23 minutes
- 2026-06-05 PASS 14 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 13 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 14 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 14 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 14 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
