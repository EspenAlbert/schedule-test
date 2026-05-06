# service_account/projectserviceaccountaccesslistentry/TestAccProjectServiceAccountAccessListEntry_singleEntry Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 32) FAIL(x 2)
Success rate: 94.12%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-23 00:52](#error-2026-04-23t0052490000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 74.03s
[2026-04-30 00:57](#error-2026-04-30t0057160000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.05s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 10 seconds
- 2026-04-08 PASS 11 seconds
- 2026-04-09 PASS 54 seconds
- 2026-04-10 PASS 12 seconds
- 2026-04-11 PASS 14 seconds
- 2026-04-12: MISSING
- 2026-04-13 PASS 9 seconds
- 2026-04-14 PASS 12 seconds
- 2026-04-15 PASS 9 seconds
- 2026-04-16 PASS 12 seconds
- 2026-04-17 PASS 9 seconds
- 2026-04-18 PASS 10 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 9 seconds
- 2026-04-21 PASS 12 seconds
- 2026-04-22 PASS 11 seconds
- 2026-04-23

### Error 2026-04-23T00:52:49+00:00
```
2026-04-23T00:52:49.9341603Z === RUN   TestAccProjectServiceAccountAccessListEntry_singleEntry
2026-04-23T00:52:49.9342610Z     resource_test.go:31: Creating execution project (1): test-acc-tf-p-4140413076560835651
2026-04-23T00:52:49.9343589Z     resource_test.go:31: 
2026-04-23T00:52:49.9344990Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-23T00:52:49.9346917Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-23T00:52:49.9349001Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-23T00:52:49.9350975Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectserviceaccountaccesslistentry/resource_test.go:31
2026-04-23T00:52:49.9351853Z         	Error:      	Received unexpected error:
2026-04-23T00:52:49.9353907Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-23T00:52:49.9355151Z         	Test:       	TestAccProjectServiceAccountAccessListEntry_singleEntry
2026-04-23T00:52:49.9356893Z         	Messages:   	Project creation failed: test-acc-tf-p-4140413076560835651, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-23T00:52:49.9358055Z --- FAIL: TestAccProjectServiceAccountAccessListEntry_singleEntry (74.30s)
```

- 2026-04-24 PASS 11 seconds
- 2026-04-25 PASS 18 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 8 seconds
- 2026-04-28 PASS 13 seconds
- 2026-04-29 PASS 12 seconds
- 2026-04-30

### Error 2026-04-30T00:57:16+00:00
```
2026-04-30T00:57:16.8424283Z === RUN   TestAccProjectServiceAccountAccessListEntry_singleEntry
2026-04-30T00:57:16.8425824Z     resource_test.go:31: Creating execution project (1): test-acc-tf-p-6053003254431089462
2026-04-30T00:57:16.8426655Z     resource_test.go:31: 
2026-04-30T00:57:16.8428282Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T00:57:16.8430183Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T00:57:16.8432299Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T00:57:16.8434457Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectserviceaccountaccesslistentry/resource_test.go:31
2026-04-30T00:57:16.8435681Z         	Error:      	Received unexpected error:
2026-04-30T00:57:16.8437953Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T00:57:16.8439165Z         	Test:       	TestAccProjectServiceAccountAccessListEntry_singleEntry
2026-04-30T00:57:16.8441067Z         	Messages:   	Project creation failed: test-acc-tf-p-6053003254431089462, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T00:57:16.8442357Z --- FAIL: TestAccProjectServiceAccountAccessListEntry_singleEntry (63.54s)
```

- 2026-05-01 PASS 9 seconds
- 2026-05-02 PASS 12 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 11 seconds
- 2026-05-05 PASS 13 seconds
- 2026-05-06 PASS 9 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 9 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 9 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 8 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 8 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 8 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 10 seconds
- 2026-05-04 PASS 9 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 10 seconds
