# service_account/projectserviceaccountaccesslistentry/TestAccProjectServiceAccountAccessListEntry_multipleEntries Test Details
# Found 33 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-21 00:47](#error-2026-07-21t0047260000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 104.02s
[2026-07-23 00:47](#error-2026-07-23t0047000000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.05s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS 13 seconds
- 2026-07-10 PASS 6 seconds
- 2026-07-11 PASS 14 seconds
- 2026-07-12: MISSING
- 2026-07-13 PASS 5 seconds
- 2026-07-14 PASS 39 seconds
- 2026-07-15 PASS 8 seconds
- 2026-07-16 PASS 8 seconds
- 2026-07-17 PASS 8 seconds
- 2026-07-18 PASS 10 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:47:26+00:00
```
2026-07-21T00:47:26.1273763Z === RUN   TestAccProjectServiceAccountAccessListEntry_multipleEntries
2026-07-21T00:47:26.1274440Z     resource_test.go:71: Creating execution project (1): test-acc-tf-p-1931282624535669357
2026-07-21T00:47:26.1274927Z     resource_test.go:71: 
2026-07-21T00:47:26.1275858Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:47:26.1277673Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:47:26.1279796Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:47:26.1281897Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectserviceaccountaccesslistentry/resource_test.go:71
2026-07-21T00:47:26.1283016Z         	Error:      	Received unexpected error:
2026-07-21T00:47:26.1285035Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:47:26.1286197Z         	Test:       	TestAccProjectServiceAccountAccessListEntry_multipleEntries
2026-07-21T00:47:26.1288063Z         	Messages:   	Project creation failed: test-acc-tf-p-1931282624535669357, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:47:26.1289570Z --- FAIL: TestAccProjectServiceAccountAccessListEntry_multipleEntries (104.19s)
```

- 2026-07-22 PASS 6 seconds
- 2026-07-23

### Error 2026-07-23T00:47:00+00:00
```
2026-07-23T00:47:00.4640597Z === RUN   TestAccProjectServiceAccountAccessListEntry_multipleEntries
2026-07-23T00:47:00.4641275Z     resource_test.go:71: Creating execution project (1): test-acc-tf-p-2772302167040014877
2026-07-23T00:47:00.4641760Z     resource_test.go:71: 
2026-07-23T00:47:00.4642899Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:47:00.4644677Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:47:00.4646465Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:47:00.4648489Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectserviceaccountaccesslistentry/resource_test.go:71
2026-07-23T00:47:00.4649608Z         	Error:      	Received unexpected error:
2026-07-23T00:47:00.4651510Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:47:00.4652859Z         	Test:       	TestAccProjectServiceAccountAccessListEntry_multipleEntries
2026-07-23T00:47:00.4654640Z         	Messages:   	Project creation failed: test-acc-tf-p-2772302167040014877, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:47:00.4655856Z --- FAIL: TestAccProjectServiceAccountAccessListEntry_multipleEntries (61.55s)
```

- 2026-07-24 PASS 5 seconds
- 2026-07-25 PASS 6 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 7 seconds
- 2026-07-28 PASS 6 seconds
- 2026-07-29
  - PASS 7 seconds
  - PASS 6 seconds
- 2026-07-30 PASS 5 seconds
- 2026-07-31 PASS 6 seconds
- 2026-08-01 PASS 6 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 6 seconds
- 2026-08-04 PASS 5 seconds
- 2026-08-05 PASS 7 seconds
- 2026-08-06 PASS 5 seconds
- 2026-08-07 PASS 7 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 6 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 7 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 5 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 7 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 4 seconds
  - PASS 4 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 5 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
