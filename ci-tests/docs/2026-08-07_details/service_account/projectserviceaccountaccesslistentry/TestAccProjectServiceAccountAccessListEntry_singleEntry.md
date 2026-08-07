# service_account/projectserviceaccountaccesslistentry/TestAccProjectServiceAccountAccessListEntry_singleEntry Test Details
# Found 33 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-14 00:42](#error-2026-07-14t0042560000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.03s
[2026-07-21 00:47](#error-2026-07-21t0047260000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 71.01s
[2026-07-23 00:47](#error-2026-07-23t0047000000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.03s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS 18 seconds
- 2026-07-10 PASS 10 seconds
- 2026-07-11 PASS 39 seconds
- 2026-07-12: MISSING
- 2026-07-13 PASS 10 seconds
- 2026-07-14

### Error 2026-07-14T00:42:56+00:00
```
2026-07-14T00:42:56.0494549Z === RUN   TestAccProjectServiceAccountAccessListEntry_singleEntry
2026-07-14T00:42:56.0499095Z     resource_test.go:31: Creating execution project (1): test-acc-tf-p-4991257639460121647
2026-07-14T00:42:56.0500390Z     resource_test.go:31: 
2026-07-14T00:42:56.0501821Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-14T00:42:56.0504167Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-14T00:42:56.0506295Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-14T00:42:56.0508436Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectserviceaccountaccesslistentry/resource_test.go:31
2026-07-14T00:42:56.0509349Z         	Error:      	Received unexpected error:
2026-07-14T00:42:56.0511654Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T00:42:56.0512875Z         	Test:       	TestAccProjectServiceAccountAccessListEntry_singleEntry
2026-07-14T00:42:56.0514770Z         	Messages:   	Project creation failed: test-acc-tf-p-4991257639460121647, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T00:42:56.0516080Z --- FAIL: TestAccProjectServiceAccountAccessListEntry_singleEntry (63.27s)
```

- 2026-07-15 PASS 12 seconds
- 2026-07-16 PASS 15 seconds
- 2026-07-17 PASS 13 seconds
- 2026-07-18 PASS 16 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:47:26+00:00
```
2026-07-21T00:47:26.1255542Z === RUN   TestAccProjectServiceAccountAccessListEntry_singleEntry
2026-07-21T00:47:26.1256516Z     resource_test.go:31: Creating execution project (1): test-acc-tf-p-3838171358471091323
2026-07-21T00:47:26.1257667Z     resource_test.go:31: 
2026-07-21T00:47:26.1259363Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:47:26.1261692Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:47:26.1263541Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:47:26.1265674Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectserviceaccountaccesslistentry/resource_test.go:31
2026-07-21T00:47:26.1266604Z         	Error:      	Received unexpected error:
2026-07-21T00:47:26.1268896Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:47:26.1270106Z         	Test:       	TestAccProjectServiceAccountAccessListEntry_singleEntry
2026-07-21T00:47:26.1271962Z         	Messages:   	Project creation failed: test-acc-tf-p-3838171358471091323, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:47:26.1273187Z --- FAIL: TestAccProjectServiceAccountAccessListEntry_singleEntry (71.12s)
```

- 2026-07-22 PASS 9 seconds
- 2026-07-23

### Error 2026-07-23T00:47:00+00:00
```
2026-07-23T00:47:00.4623230Z === RUN   TestAccProjectServiceAccountAccessListEntry_singleEntry
2026-07-23T00:47:00.4624385Z     resource_test.go:31: Creating execution project (1): test-acc-tf-p-5650019494068684862
2026-07-23T00:47:00.4625540Z     resource_test.go:31: 
2026-07-23T00:47:00.4626757Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:47:00.4628848Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:47:00.4630614Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:47:00.4632906Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectserviceaccountaccesslistentry/resource_test.go:31
2026-07-23T00:47:00.4633821Z         	Error:      	Received unexpected error:
2026-07-23T00:47:00.4635743Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:47:00.4636867Z         	Test:       	TestAccProjectServiceAccountAccessListEntry_singleEntry
2026-07-23T00:47:00.4638633Z         	Messages:   	Project creation failed: test-acc-tf-p-5650019494068684862, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:47:00.4640009Z --- FAIL: TestAccProjectServiceAccountAccessListEntry_singleEntry (61.35s)
```

- 2026-07-24 PASS 10 seconds
- 2026-07-25 PASS 9 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 10 seconds
- 2026-07-28 PASS 8 seconds
- 2026-07-29
  - PASS 9 seconds
  - PASS 10 seconds
- 2026-07-30 PASS 8 seconds
- 2026-07-31 PASS 11 seconds
- 2026-08-01 PASS 10 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 12 seconds
- 2026-08-04 PASS 8 seconds
- 2026-08-05 PASS 11 seconds
- 2026-08-06 PASS 8 seconds
- 2026-08-07 PASS 11 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 11 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 13 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 8 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 11 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 7 seconds
  - PASS 10 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 7 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
