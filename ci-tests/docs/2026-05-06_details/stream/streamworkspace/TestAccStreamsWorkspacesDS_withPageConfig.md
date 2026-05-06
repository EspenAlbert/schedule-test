# stream/streamworkspace/TestAccStreamsWorkspacesDS_withPageConfig Test Details
# Found 38 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-05 02:16](#error-2026-05-05t0216140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.00s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 2 seconds
- 2026-04-08 PASS 2 seconds
- 2026-04-09 PASS 2 seconds
- 2026-04-10 PASS 2 seconds
- 2026-04-11 PASS 45 seconds
- 2026-04-12: MISSING
- 2026-04-13 PASS 2 seconds
- 2026-04-14 PASS a minute
- 2026-04-15 PASS a second
- 2026-04-16 PASS 24 seconds
- 2026-04-17 PASS a second
- 2026-04-18 PASS 2 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS a second
- 2026-04-21 PASS 2 seconds
- 2026-04-22 PASS a second
- 2026-04-23 PASS 2 seconds
- 2026-04-24 PASS 2 seconds
- 2026-04-25 PASS 2 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 2 seconds
- 2026-04-28 PASS 2 seconds
- 2026-04-29 PASS 2 seconds
- 2026-04-30
  - PASS 2 seconds
  - PASS 3 seconds
- 2026-05-01 PASS a second
- 2026-05-02 PASS 2 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 2 seconds
- 2026-05-05

### Error 2026-05-05T02:16:14+00:00
```
2026-05-05T02:16:14.7905872Z === RUN   TestAccStreamsWorkspacesDS_withPageConfig
2026-05-05T02:16:14.7906556Z     plural_data_source_test.go:14: Creating execution project (1): test-acc-tf-p-8187077480490953200
2026-05-05T02:16:14.7907124Z     plural_data_source_test.go:14: 
2026-05-05T02:16:14.7908204Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-05T02:16:14.7910359Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-05T02:16:14.7912615Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-05T02:16:14.7915004Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamworkspace/plural_data_source_test.go:14
2026-05-05T02:16:14.7915887Z         	Error:      	Received unexpected error:
2026-05-05T02:16:14.7918445Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T02:16:14.7919583Z         	Test:       	TestAccStreamsWorkspacesDS_withPageConfig
2026-05-05T02:16:14.7921950Z         	Messages:   	Project creation failed: test-acc-tf-p-8187077480490953200, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T02:16:14.7923171Z --- FAIL: TestAccStreamsWorkspacesDS_withPageConfig (68.04s)
```

- 2026-05-06 PASS a second

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS a second
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 2 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 2 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22
  - PASS 2 seconds
  - PASS 2 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 2 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS a second
- 2026-05-04
  - PASS 2 seconds
  - PASS 2 seconds
- 2026-05-05 PASS a second
- 2026-05-06 PASS a second
