# config/alertconfiguration/TestAccConfigRSAlertConfiguration_basic Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 32) FAIL(x 3)
Success rate: 91.43%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-16 00:53](#error-2026-04-16t0053140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.04s
[2026-04-23 00:53](#error-2026-04-23t0053200000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 81.04s
[2026-04-30 01:01](#error-2026-04-30t0101130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.06s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 17 seconds
- 2026-04-08 PASS 35 seconds
- 2026-04-09 PASS 21 seconds
- 2026-04-10 PASS 25 seconds
- 2026-04-11 PASS 22 seconds
- 2026-04-12: MISSING
- 2026-04-13 PASS 34 seconds
- 2026-04-14 PASS 28 seconds
- 2026-04-15 PASS 22 seconds
- 2026-04-16

### Error 2026-04-16T00:53:14+00:00
```
2026-04-16T00:53:14.2368138Z === RUN   TestAccConfigRSAlertConfiguration_basic
2026-04-16T00:53:14.2369025Z     resource_test.go:28: Creating execution project (1): test-acc-tf-p-9083191963560759597
2026-04-16T00:53:14.2369530Z     resource_test.go:28: 
2026-04-16T00:53:14.2370509Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-16T00:53:14.2372590Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-16T00:53:14.2375019Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-16T00:53:14.2377934Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:28
2026-04-16T00:53:14.2378722Z         	Error:      	Received unexpected error:
2026-04-16T00:53:14.2380213Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-16T00:53:14.2381016Z         	Test:       	TestAccConfigRSAlertConfiguration_basic
2026-04-16T00:53:14.2382344Z         	Messages:   	Project creation failed: test-acc-tf-p-9083191963560759597, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-16T00:53:14.2383828Z --- FAIL: TestAccConfigRSAlertConfiguration_basic (63.44s)
```

- 2026-04-17 PASS 20 seconds
- 2026-04-18 PASS 49 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 18 seconds
- 2026-04-21 PASS 55 seconds
- 2026-04-22 PASS 33 seconds
- 2026-04-23

### Error 2026-04-23T00:53:20+00:00
```
2026-04-23T00:53:20.6834221Z === RUN   TestAccConfigRSAlertConfiguration_basic
2026-04-23T00:53:20.6835418Z     resource_test.go:28: Creating execution project (1): test-acc-tf-p-3770689199635186134
2026-04-23T00:53:20.6858820Z     resource_test.go:28: 
2026-04-23T00:53:20.6860998Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-23T00:53:20.6863480Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-23T00:53:20.6865639Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-23T00:53:20.6867895Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:28
2026-04-23T00:53:20.6869116Z         	Error:      	Received unexpected error:
2026-04-23T00:53:20.6871453Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-23T00:53:20.6873087Z         	Test:       	TestAccConfigRSAlertConfiguration_basic
2026-04-23T00:53:20.6875973Z         	Messages:   	Project creation failed: test-acc-tf-p-3770689199635186134, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-23T00:53:20.6877656Z --- FAIL: TestAccConfigRSAlertConfiguration_basic (81.41s)
```

- 2026-04-24 PASS 18 seconds
- 2026-04-25 PASS a minute
- 2026-04-26: MISSING
- 2026-04-27 PASS 35 seconds
- 2026-04-28 PASS 39 seconds
- 2026-04-29 PASS 20 seconds
- 2026-04-30

### Error 2026-04-30T01:01:13+00:00
```
2026-04-30T01:01:13.6532864Z === RUN   TestAccConfigRSAlertConfiguration_basic
2026-04-30T01:01:13.6534061Z     resource_test.go:28: Creating execution project (1): test-acc-tf-p-7202884555819466258
2026-04-30T01:01:13.6538047Z     resource_test.go:28: 
2026-04-30T01:01:13.6539993Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T01:01:13.6549915Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T01:01:13.6561610Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T01:01:13.6565046Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:28
2026-04-30T01:01:13.6587509Z         	Error:      	Received unexpected error:
2026-04-30T01:01:13.6591702Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:01:13.6594685Z         	Test:       	TestAccConfigRSAlertConfiguration_basic
2026-04-30T01:01:13.6601934Z         	Messages:   	Project creation failed: test-acc-tf-p-7202884555819466258, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:01:13.6604055Z --- FAIL: TestAccConfigRSAlertConfiguration_basic (61.63s)
```

- 2026-05-01 PASS 36 seconds
- 2026-05-02 PASS 18 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 35 seconds
- 2026-05-05 PASS 18 seconds
- 2026-05-06 PASS 16 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 22 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 34 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 34 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22
  - PASS 24 seconds
  - PASS 35 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 38 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 36 seconds
- 2026-05-04 PASS 35 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 29 seconds
