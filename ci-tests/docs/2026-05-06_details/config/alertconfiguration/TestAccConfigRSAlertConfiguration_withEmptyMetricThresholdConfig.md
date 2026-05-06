# config/alertconfiguration/TestAccConfigRSAlertConfiguration_withEmptyMetricThresholdConfig Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 34) FAIL
Success rate: 97.14%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-30 01:01](#error-2026-04-30t0101130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.06s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 6 seconds
- 2026-04-08 PASS 17 seconds
- 2026-04-09 PASS 10 seconds
- 2026-04-10 PASS 11 seconds
- 2026-04-11 PASS 4 seconds
- 2026-04-12: MISSING
- 2026-04-13 PASS 18 seconds
- 2026-04-14 PASS 7 seconds
- 2026-04-15 PASS 10 seconds
- 2026-04-16 PASS 55 seconds
- 2026-04-17 PASS 11 seconds
- 2026-04-18 PASS 6 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 10 seconds
- 2026-04-21 PASS 8 seconds
- 2026-04-22 PASS 17 seconds
- 2026-04-23 PASS 32 seconds
- 2026-04-24 PASS 10 seconds
- 2026-04-25 PASS 7 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 14 seconds
- 2026-04-28 PASS 6 seconds
- 2026-04-29 PASS 11 seconds
- 2026-04-30

### Error 2026-04-30T01:01:13+00:00
```
2026-04-30T01:01:13.6605115Z === RUN   TestAccConfigRSAlertConfiguration_withEmptyMetricThresholdConfig
2026-04-30T01:01:13.6606549Z     resource_test.go:85: Creating execution project (1): test-acc-tf-p-3547746863392007722
2026-04-30T01:01:13.6616174Z     resource_test.go:85: 
2026-04-30T01:01:13.6618880Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T01:01:13.6622519Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T01:01:13.6625539Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T01:01:13.6629033Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:85
2026-04-30T01:01:13.6631362Z         	Error:      	Received unexpected error:
2026-04-30T01:01:13.6635342Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:01:13.6637996Z         	Test:       	TestAccConfigRSAlertConfiguration_withEmptyMetricThresholdConfig
2026-04-30T01:01:13.6641699Z         	Messages:   	Project creation failed: test-acc-tf-p-3547746863392007722, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:01:13.6650826Z --- FAIL: TestAccConfigRSAlertConfiguration_withEmptyMetricThresholdConfig (66.57s)
```

- 2026-05-01 PASS 18 seconds
- 2026-05-02 PASS 7 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 18 seconds
- 2026-05-05 PASS 7 seconds
- 2026-05-06 PASS 9 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 10 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 16 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 17 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22
  - PASS 14 seconds
  - PASS 16 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 21 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 18 seconds
- 2026-05-04 PASS 19 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 12 seconds
