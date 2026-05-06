# service_account/projectserviceaccountaccesslistentry/TestAccProjectServiceAccountAccessListEntry_multipleEntries Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 33) FAIL
Success rate: 97.06%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-30 00:57](#error-2026-04-30t0057160000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.08s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 6 seconds
- 2026-04-08 PASS 6 seconds
- 2026-04-09 PASS 17 seconds
- 2026-04-10 PASS 6 seconds
- 2026-04-11 PASS 6 seconds
- 2026-04-12: MISSING
- 2026-04-13 PASS 5 seconds
- 2026-04-14 PASS 7 seconds
- 2026-04-15 PASS 4 seconds
- 2026-04-16 PASS 7 seconds
- 2026-04-17 PASS 5 seconds
- 2026-04-18 PASS 5 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 5 seconds
- 2026-04-21 PASS 8 seconds
- 2026-04-22 PASS 8 seconds
- 2026-04-23 PASS 46 seconds
- 2026-04-24 PASS 6 seconds
- 2026-04-25 PASS 12 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 5 seconds
- 2026-04-28 PASS 9 seconds
- 2026-04-29 PASS 7 seconds
- 2026-04-30

### Error 2026-04-30T00:57:16+00:00
```
2026-04-30T00:57:16.8442909Z === RUN   TestAccProjectServiceAccountAccessListEntry_multipleEntries
2026-04-30T00:57:16.8443569Z     resource_test.go:71: Creating execution project (1): test-acc-tf-p-1104841289186280750
2026-04-30T00:57:16.8444046Z     resource_test.go:71: 
2026-04-30T00:57:16.8444962Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T00:57:16.8447228Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T00:57:16.8449094Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T00:57:16.8451244Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectserviceaccountaccesslistentry/resource_test.go:71
2026-04-30T00:57:16.8452140Z         	Error:      	Received unexpected error:
2026-04-30T00:57:16.8454344Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T00:57:16.8455805Z         	Test:       	TestAccProjectServiceAccountAccessListEntry_multipleEntries
2026-04-30T00:57:16.8457706Z         	Messages:   	Project creation failed: test-acc-tf-p-1104841289186280750, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T00:57:16.8459015Z --- FAIL: TestAccProjectServiceAccountAccessListEntry_multipleEntries (61.84s)
```

- 2026-05-01 PASS 6 seconds
- 2026-05-02 PASS 7 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 7 seconds
- 2026-05-05 PASS 9 seconds
- 2026-05-06 PASS 6 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 5 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 6 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 5 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 5 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 5 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 6 seconds
- 2026-05-04 PASS 5 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 6 seconds
