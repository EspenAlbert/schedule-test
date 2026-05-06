# autogen_fast/projectsettingsapi/TestAccProjectSettingsAPI_basic Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 4)
Success rate: 88.57%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-30 01:02](#error-2026-04-30t0102360000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.06s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 7 seconds
- 2026-04-08 PASS 6 seconds
- 2026-04-09 PASS 45 seconds
- 2026-04-10 PASS 7 seconds
- 2026-04-11 PASS a minute
- 2026-04-12: MISSING
- 2026-04-13 PASS 6 seconds
- 2026-04-14 PASS 8 seconds
- 2026-04-15 PASS 6 seconds
- 2026-04-16 PASS 9 seconds
- 2026-04-17 PASS 6 seconds
- 2026-04-18 PASS 43 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 10 seconds
- 2026-04-21 PASS 11 seconds
- 2026-04-22 PASS 7 seconds
- 2026-04-23 PASS 17 seconds
- 2026-04-24 PASS 6 seconds
- 2026-04-25 PASS 9 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 7 seconds
- 2026-04-28 PASS 8 seconds
- 2026-04-29 PASS 7 seconds
- 2026-04-30

### Error 2026-04-30T01:02:36+00:00
```
2026-04-30T01:02:36.0958115Z === RUN   TestAccProjectSettingsAPI_basic
2026-04-30T01:02:36.0958695Z     resource_test.go:18: Creating execution project (1): test-acc-tf-p-8146019852671437508
2026-04-30T01:02:36.0959199Z     resource_test.go:18: 
2026-04-30T01:02:36.0960098Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T01:02:36.0962028Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T01:02:36.0963714Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T01:02:36.0965521Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/projectsettingsapi/resource_test.go:18
2026-04-30T01:02:36.0966360Z         	Error:      	Received unexpected error:
2026-04-30T01:02:36.0968155Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:02:36.0969171Z         	Test:       	TestAccProjectSettingsAPI_basic
2026-04-30T01:02:36.0970942Z         	Messages:   	Project creation failed: test-acc-tf-p-8146019852671437508, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:02:36.0972090Z --- FAIL: TestAccProjectSettingsAPI_basic (65.61s)
```

- 2026-05-01 PASS 8 seconds
- 2026-05-02 PASS 8 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 8 seconds
- 2026-05-05 PASS 20 seconds
- 2026-05-06 PASS 7 seconds

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-04-08 06:06](#error-2026-04-08t0606460000) |  | qa | 7.02s
[2026-04-08 07:18](#error-2026-04-08t0718270000) |  | qa | 5.07s
[2026-04-12 00:53](#error-2026-04-12t0053180000) |  | qa | 6.05s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - FAIL 7 seconds

### Error 2026-04-08T06:06:46+00:00
```
2026-04-08T06:06:46.0084720Z === RUN   TestAccProjectSettingsAPI_basic
2026-04-08T06:06:46.0085345Z     resource_test.go:18: Creating execution project (1): test-acc-tf-p-4249057712983423546
2026-04-08T06:06:46.0086210Z === CONT  TestAccProjectSettingsAPI_basic
2026-04-08T06:06:46.0091297Z   
2026-04-08T06:06:46.0092224Z     resource_test.go:21: Step 5/5 error running import: ImportStateVerify attributes not equivalent. Difference is shown below. The - symbol indicates attributes missing after import.
2026-04-08T06:06:46.0093027Z         
2026-04-08T06:06:46.0093346Z           map[string]string{
2026-04-08T06:06:46.0093789Z         - 	"is_native_reranking_enabled": "false",
2026-04-08T06:06:46.0094156Z           }
2026-04-08T06:06:46.0094487Z --- FAIL: TestAccProjectSettingsAPI_basic (7.18s)
```

  - FAIL 5 seconds

### Error 2026-04-08T07:18:27+00:00
```
2026-04-08T07:18:27.2281766Z === RUN   TestAccProjectSettingsAPI_basic
2026-04-08T07:18:27.2282755Z     resource_test.go:18: Creating execution project (1): test-acc-tf-p-8838207501283389996
2026-04-08T07:18:27.2284181Z === CONT  TestAccProjectSettingsAPI_basic
2026-04-08T07:18:27.2291334Z    test_working_directory=/tmp/plugintest1132879325 test_step_number=5 test_name=TestAccProjectSettingsAPI_basic
2026-04-08T07:18:27.2293397Z     resource_test.go:21: Step 5/5 error running import: ImportStateVerify attributes not equivalent. Difference is shown below. The - symbol indicates attributes missing after import.
2026-04-08T07:18:27.2294825Z         
2026-04-08T07:18:27.2295309Z           map[string]string{
2026-04-08T07:18:27.2296002Z         - 	"is_native_reranking_enabled": "false",
2026-04-08T07:18:27.2296565Z           }
2026-04-08T07:18:27.2297050Z --- FAIL: TestAccProjectSettingsAPI_basic (5.68s)
```

- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12

### Error 2026-04-12T00:53:18+00:00
```
2026-04-12T00:53:18.7724435Z === RUN   TestAccProjectSettingsAPI_basic
2026-04-12T00:53:18.7725050Z     resource_test.go:18: Creating execution project (1): test-acc-tf-p-8622037575681019680
2026-04-12T00:53:18.7725917Z === CONT  TestAccProjectSettingsAPI_basic
2026-04-12T00:53:18.7730739Z    test_step_number=5
2026-04-12T00:53:18.7731699Z     resource_test.go:21: Step 5/5 error running import: ImportStateVerify attributes not equivalent. Difference is shown below. The - symbol indicates attributes missing after import.
2026-04-12T00:53:18.7732473Z         
2026-04-12T00:53:18.7732775Z           map[string]string{
2026-04-12T00:53:18.7733190Z         - 	"is_native_reranking_enabled": "false",
2026-04-12T00:53:18.7733547Z           }
2026-04-12T00:53:18.7733858Z --- FAIL: TestAccProjectSettingsAPI_basic (6.46s)
```

- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 5 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 8 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 7 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 8 seconds
- 2026-05-04 PASS 6 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 8 seconds
