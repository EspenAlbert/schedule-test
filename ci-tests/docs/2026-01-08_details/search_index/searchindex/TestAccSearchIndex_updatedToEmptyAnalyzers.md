# search_index/searchindex/TestAccSearchIndex_updatedToEmptyAnalyzers Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 01:01](#error-2026-01-07t0101420000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da92bd59b8466ea71d735/clusters/test-acc-tf-c-7957497697210386584 | dev | flaky_500 | 524.06s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 9 seconds
  - PASS 9 seconds
- 2025-12-11 PASS 8 seconds
- 2025-12-12 PASS 9 seconds
- 2025-12-13 PASS 10 seconds
- 2025-12-14: MISSING
- 2025-12-15 PASS 11 seconds
- 2025-12-16 PASS 10 seconds
- 2025-12-17 PASS 9 seconds
- 2025-12-18 PASS 8 seconds
- 2025-12-19 PASS 9 seconds
- 2025-12-20 PASS 10 seconds
- 2025-12-21: MISSING
- 2025-12-22 PASS 12 seconds
- 2025-12-23 PASS 9 seconds
- 2025-12-24 PASS 10 seconds
- 2025-12-25 PASS 9 seconds
- 2025-12-26 PASS 9 seconds
- 2025-12-27 PASS 8 seconds
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 9 seconds
- 2025-12-31 PASS 9 seconds
- 2026-01-01 PASS 9 seconds
- 2026-01-02 PASS 9 seconds
- 2026-01-03 PASS 10 seconds
- 2026-01-04: MISSING
- 2026-01-05 PASS 9 seconds
- 2026-01-06 PASS 9 seconds
- 2026-01-07

### Error 2026-01-07T01:01:42+00:00
```
2026-01-07T01:01:42.3678341Z === RUN   TestAccSearchIndex_updatedToEmptyAnalyzers
2026-01-07T01:01:42.3678928Z     resource_search_index_test.go:146: Creating execution cluster: test-acc-tf-c-7957497697210386584
2026-01-07T01:01:43.0888085Z 2026/01/07 01:01:43 [DEBUG] Waiting for state to become: [IDLE]
2026-01-07T01:04:43.5013470Z 2026/01/07 01:04:43 [TRACE] Waiting 1m0s before next try
2026-01-07T01:05:43.9613514Z 2026/01/07 01:05:43 [TRACE] Waiting 10s before next try
2026-01-07T01:05:54.3268559Z 2026/01/07 01:05:54 [TRACE] Waiting 1m0s before next try
2026-01-07T01:06:54.8368677Z 2026/01/07 01:06:54 [TRACE] Waiting 10s before next try
2026-01-07T01:07:05.1330549Z 2026/01/07 01:07:05 [TRACE] Waiting 1m0s before next try
2026-01-07T01:08:05.5503245Z 2026/01/07 01:08:05 [TRACE] Waiting 10s before next try
2026-01-07T01:08:15.7794328Z 2026/01/07 01:08:15 [TRACE] Waiting 1m0s before next try
2026-01-07T01:09:16.2237050Z 2026/01/07 01:09:16 [TRACE] Waiting 10s before next try
2026-01-07T01:09:26.5352370Z 2026/01/07 01:09:26 [TRACE] Waiting 1m0s before next try
2026-01-07T01:10:26.9216252Z     resource_search_index_test.go:146: 
2026-01-07T01:10:26.9218080Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2026-01-07T01:10:26.9220359Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:181
2026-01-07T01:10:26.9222930Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:146
2026-01-07T01:10:26.9223917Z         	Error:      	Received unexpected error:
2026-01-07T01:10:26.9226703Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da92bd59b8466ea71d735/clusters/test-acc-tf-c-7957497697210386584 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T01:10:26.9228094Z         	Test:       	TestAccSearchIndex_updatedToEmptyAnalyzers
2026-01-07T01:10:26.9230372Z         	Messages:   	Cluster creation failed: test-acc-tf-c-7957497697210386584, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da92bd59b8466ea71d735/clusters/test-acc-tf-c-7957497697210386584 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T01:10:26.9231920Z --- FAIL: TestAccSearchIndex_updatedToEmptyAnalyzers (524.56s)
```

- 2026-01-08 PASS 9 seconds

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 10 seconds
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 11 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 10 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 10 seconds
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 10 seconds
