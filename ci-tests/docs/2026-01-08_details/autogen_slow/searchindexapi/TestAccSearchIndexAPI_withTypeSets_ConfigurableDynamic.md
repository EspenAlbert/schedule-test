# autogen_slow/searchindexapi/TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic Test Details
# Found 32 TestRuns in dev, qa from 2025-12-09 to 2026-01-08 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 01:14](#error-2026-01-07t0114180000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da97daf4f6cc389e8f782/clusters/test-acc-tf-c-7532219497650158925 | dev | flaky_500 | 595.08s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 18 minutes
  - PASS 19 minutes
- 2025-12-11 PASS 18 minutes
- 2025-12-12 PASS 23 minutes
- 2025-12-13 PASS 18 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 15 minutes
- 2025-12-16 PASS 20 minutes
- 2025-12-17 PASS 20 minutes
- 2025-12-18 PASS 15 minutes
- 2025-12-19 PASS 20 minutes
- 2025-12-20 PASS 20 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 20 minutes
- 2025-12-23 PASS 21 minutes
- 2025-12-24 PASS 24 minutes
- 2025-12-25 PASS 15 minutes
- 2025-12-26 PASS 21 minutes
- 2025-12-27 PASS 23 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 18 minutes
- 2025-12-31 PASS 16 minutes
- 2026-01-01 PASS 19 minutes
- 2026-01-02 PASS 19 minutes
- 2026-01-03 PASS 19 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 19 minutes
- 2026-01-06 PASS 20 minutes
- 2026-01-07

### Error 2026-01-07T01:14:18+00:00
```
2026-01-07T01:14:18.8417751Z === RUN   TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-01-07T01:14:18.8418330Z     resource_test.go:114: Creating execution cluster: test-acc-tf-c-7532219497650158925
2026-01-07T01:14:18.8418825Z 2026/01/07 00:50:40 [DEBUG] Waiting for state to become: [IDLE]
2026-01-07T01:14:18.8419209Z 2026/01/07 00:53:40 [TRACE] Waiting 1m0s before next try
2026-01-07T01:14:18.8419567Z 2026/01/07 00:54:41 [TRACE] Waiting 10s before next try
2026-01-07T01:14:18.8419925Z 2026/01/07 00:54:51 [TRACE] Waiting 1m0s before next try
2026-01-07T01:14:18.8420291Z 2026/01/07 00:55:52 [TRACE] Waiting 10s before next try
2026-01-07T01:14:18.8420647Z 2026/01/07 00:56:02 [TRACE] Waiting 1m0s before next try
2026-01-07T01:14:18.8420990Z 2026/01/07 00:57:02 [TRACE] Waiting 10s before next try
2026-01-07T01:14:18.8421620Z 2026/01/07 00:57:13 [TRACE] Waiting 1m0s before next try
2026-01-07T01:14:18.8422203Z 2026/01/07 00:58:13 [TRACE] Waiting 10s before next try
2026-01-07T01:14:18.8422550Z 2026/01/07 00:58:23 [TRACE] Waiting 1m0s before next try
2026-01-07T01:14:18.8422897Z 2026/01/07 00:59:24 [TRACE] Waiting 10s before next try
2026-01-07T01:14:18.8423247Z 2026/01/07 00:59:34 [TRACE] Waiting 1m0s before next try
2026-01-07T01:14:18.8423756Z     resource_test.go:114: 
2026-01-07T01:14:18.8424631Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2026-01-07T01:14:18.8426319Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:181
2026-01-07T01:14:18.8428100Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:114
2026-01-07T01:14:18.8428862Z         	Error:      	Received unexpected error:
2026-01-07T01:14:18.8431164Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da97daf4f6cc389e8f782/clusters/test-acc-tf-c-7532219497650158925 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T01:14:18.8432830Z         	Test:       	TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-01-07T01:14:18.8434885Z         	Messages:   	Cluster creation failed: test-acc-tf-c-7532219497650158925, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da97daf4f6cc389e8f782/clusters/test-acc-tf-c-7532219497650158925 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T01:14:18.8436292Z --- FAIL: TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic (595.84s)
```

- 2026-01-08 PASS 18 minutes

## QA Environment
### Timeline
- 2025-12-09 PASS 17 minutes
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 19 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 16 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 18 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 18 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 16 minutes
