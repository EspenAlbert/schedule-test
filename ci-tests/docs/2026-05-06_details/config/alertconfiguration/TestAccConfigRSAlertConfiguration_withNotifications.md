# config/alertconfiguration/TestAccConfigRSAlertConfiguration_withNotifications Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 34) FAIL
Success rate: 97.14%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-30 01:01](#error-2026-04-30t0101130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.05s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 12 seconds
- 2026-04-08 PASS 32 seconds
- 2026-04-09 PASS 15 seconds
- 2026-04-10 PASS 23 seconds
- 2026-04-11 PASS 12 seconds
- 2026-04-12: MISSING
- 2026-04-13 PASS 33 seconds
- 2026-04-14 PASS 13 seconds
- 2026-04-15 PASS 20 seconds
- 2026-04-16 PASS 10 seconds
- 2026-04-17 PASS 18 seconds
- 2026-04-18 PASS 11 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 17 seconds
- 2026-04-21 PASS 14 seconds
- 2026-04-22 PASS 32 seconds
- 2026-04-23 PASS 12 seconds
- 2026-04-24 PASS 17 seconds
- 2026-04-25 PASS 11 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 33 seconds
- 2026-04-28 PASS 13 seconds
- 2026-04-29 PASS 19 seconds
- 2026-04-30

### Error 2026-04-30T01:01:13+00:00
```
2026-04-30T01:01:13.6682300Z === RUN   TestAccConfigRSAlertConfiguration_withNotifications
2026-04-30T01:01:13.6683533Z     resource_test.go:123: Creating execution project (1): test-acc-tf-p-7567586616202449849
2026-04-30T01:01:13.6684525Z     resource_test.go:123: 
2026-04-30T01:01:13.6686240Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T01:01:13.6689636Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T01:01:13.6692913Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T01:01:13.6696089Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:123
2026-04-30T01:01:13.6697632Z         	Error:      	Received unexpected error:
2026-04-30T01:01:13.6701126Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:01:13.6703437Z         	Test:       	TestAccConfigRSAlertConfiguration_withNotifications
2026-04-30T01:01:13.6706661Z         	Messages:   	Project creation failed: test-acc-tf-p-7567586616202449849, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:01:13.6708927Z --- FAIL: TestAccConfigRSAlertConfiguration_withNotifications (73.53s)
```

- 2026-05-01 PASS 34 seconds
- 2026-05-02 PASS 13 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 34 seconds
- 2026-05-05 PASS 13 seconds
- 2026-05-06 PASS 15 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 21 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 32 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 33 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22
  - PASS 23 seconds
  - PASS 34 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 37 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 34 seconds
- 2026-05-04 PASS 34 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 25 seconds
