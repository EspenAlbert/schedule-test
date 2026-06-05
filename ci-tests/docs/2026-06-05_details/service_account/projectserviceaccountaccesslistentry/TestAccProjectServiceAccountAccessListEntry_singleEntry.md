# service_account/projectserviceaccountaccesslistentry/TestAccProjectServiceAccountAccessListEntry_singleEntry Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 28) FAIL(x 2)
Success rate: 93.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-21 01:05](#error-2026-05-21t0105210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.06s
[2026-05-23 01:01](#error-2026-05-23t0101130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.06s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 13 seconds
- 2026-05-08 PASS 11 seconds
- 2026-05-09 PASS 30 seconds
- 2026-05-10: MISSING
- 2026-05-11 PASS 9 seconds
- 2026-05-12 PASS 17 seconds
- 2026-05-13 PASS 11 seconds
- 2026-05-14 PASS 24 seconds
- 2026-05-15 PASS 11 seconds
- 2026-05-16 PASS 24 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 12 seconds
- 2026-05-19 PASS 16 seconds
- 2026-05-20 PASS 9 seconds
- 2026-05-21

### Error 2026-05-21T01:05:21+00:00
```
2026-05-21T01:05:21.9403930Z === RUN   TestAccProjectServiceAccountAccessListEntry_singleEntry
2026-05-21T01:05:21.9405298Z     resource_test.go:31: Creating execution project (1): test-acc-tf-p-7573180566295177015
2026-05-21T01:05:21.9406245Z     resource_test.go:31: 
2026-05-21T01:05:21.9408408Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-21T01:05:21.9411126Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-21T01:05:21.9413594Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-21T01:05:21.9416048Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectserviceaccountaccesslistentry/resource_test.go:31
2026-05-21T01:05:21.9416997Z         	Error:      	Received unexpected error:
2026-05-21T01:05:21.9418980Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:05:21.9420152Z         	Test:       	TestAccProjectServiceAccountAccessListEntry_singleEntry
2026-05-21T01:05:21.9421967Z         	Messages:   	Project creation failed: test-acc-tf-p-7573180566295177015, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:05:21.9423628Z --- FAIL: TestAccProjectServiceAccountAccessListEntry_singleEntry (68.60s)
```

- 2026-05-22 PASS 12 seconds
- 2026-05-23

### Error 2026-05-23T01:01:13+00:00
```
2026-05-23T01:01:13.4349848Z === RUN   TestAccProjectServiceAccountAccessListEntry_singleEntry
2026-05-23T01:01:13.4351455Z     resource_test.go:31: Creating execution project (1): test-acc-tf-p-8519616489130983864
2026-05-23T01:01:13.4352416Z     resource_test.go:31: 
2026-05-23T01:01:13.4354570Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T01:01:13.4357711Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-23T01:01:13.4359944Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-23T01:01:13.4362707Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectserviceaccountaccesslistentry/resource_test.go:31
2026-05-23T01:01:13.4363621Z         	Error:      	Received unexpected error:
2026-05-23T01:01:13.4365649Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:01:13.4366897Z         	Test:       	TestAccProjectServiceAccountAccessListEntry_singleEntry
2026-05-23T01:01:13.4368756Z         	Messages:   	Project creation failed: test-acc-tf-p-8519616489130983864, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:01:13.4370034Z --- FAIL: TestAccProjectServiceAccountAccessListEntry_singleEntry (64.63s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 10 seconds
- 2026-05-26 PASS 21 seconds
- 2026-05-27 PASS 12 seconds
- 2026-05-28 PASS 13 seconds
- 2026-05-29 PASS 12 seconds
- 2026-05-30 PASS 14 seconds
- 2026-05-31: MISSING
- 2026-06-01 PASS 12 seconds
- 2026-06-02 PASS 17 seconds
- 2026-06-03 PASS 9 seconds
- 2026-06-04 PASS 12 seconds
- 2026-06-05 PASS 11 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 10 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 9 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 11 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 10 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
