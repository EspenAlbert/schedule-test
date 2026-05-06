# autogen_fast/alertconfigurationapi/TestAccAlertConfigurationAPI_withEmptyMetricThresholdConfig Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 34) FAIL
Success rate: 97.14%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-09 00:42](#error-2026-04-09t0042440000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.02s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 6 seconds
- 2026-04-08 PASS 6 seconds
- 2026-04-09

### Error 2026-04-09T00:42:44+00:00
```
2026-04-09T00:42:44.6656054Z === RUN   TestAccAlertConfigurationAPI_withEmptyMetricThresholdConfig
2026-04-09T00:42:44.6657247Z     resource_test.go:66: Creating execution project (1): test-acc-tf-p-8794057003390803269
2026-04-09T00:42:44.6658220Z     resource_test.go:66: 
2026-04-09T00:42:44.6659860Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-09T00:42:44.6663508Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-09T00:42:44.6666863Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-09T00:42:44.6670513Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:66
2026-04-09T00:42:44.6672129Z         	Error:      	Received unexpected error:
2026-04-09T00:42:44.6676033Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:42:44.6678225Z         	Test:       	TestAccAlertConfigurationAPI_withEmptyMetricThresholdConfig
2026-04-09T00:42:44.6682087Z         	Messages:   	Project creation failed: test-acc-tf-p-8794057003390803269, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:42:44.6684693Z --- FAIL: TestAccAlertConfigurationAPI_withEmptyMetricThresholdConfig (69.23s)
```

- 2026-04-10 PASS 5 seconds
- 2026-04-11 PASS a minute
- 2026-04-12: MISSING
- 2026-04-13 PASS 6 seconds
- 2026-04-14 PASS 8 seconds
- 2026-04-15 PASS 5 seconds
- 2026-04-16 PASS a minute
- 2026-04-17 PASS 5 seconds
- 2026-04-18 PASS 5 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 6 seconds
- 2026-04-21 PASS 29 seconds
- 2026-04-22 PASS 6 seconds
- 2026-04-23 PASS 5 seconds
- 2026-04-24 PASS 5 seconds
- 2026-04-25 PASS 4 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 5 seconds
- 2026-04-28 PASS 6 seconds
- 2026-04-29 PASS 5 seconds
- 2026-04-30 PASS 5 seconds
- 2026-05-01 PASS 6 seconds
- 2026-05-02 PASS 5 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 6 seconds
- 2026-05-05 PASS 5 seconds
- 2026-05-06 PASS 5 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 5 seconds
  - PASS 6 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 5 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 5 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 6 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 6 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 6 seconds
- 2026-05-04 PASS 6 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 6 seconds
