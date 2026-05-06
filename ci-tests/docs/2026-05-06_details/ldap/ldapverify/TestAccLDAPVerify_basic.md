# ldap/ldapverify/TestAccLDAPVerify_basic Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 32) FAIL(x 2)
Success rate: 94.12%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-16 00:52](#error-2026-04-16t0052470000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.05s
[2026-04-30 00:57](#error-2026-04-30t0057400000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.05s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 13 minutes
- 2026-04-08 PASS 3 minutes
- 2026-04-09 PASS 21 minutes
- 2026-04-10 PASS 3 minutes
- 2026-04-11 PASS 14 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 3 minutes
- 2026-04-14 PASS 14 minutes
- 2026-04-15 PASS 3 minutes
- 2026-04-16

### Error 2026-04-16T00:52:47+00:00
```
2026-04-16T00:52:47.7103299Z === RUN   TestAccLDAPVerify_basic
2026-04-16T00:52:47.7105363Z     resource_ldap_verify_test.go:22: Creating execution project (1): test-acc-tf-p-4264519583061613951
2026-04-16T00:52:47.7107144Z     resource_ldap_verify_test.go:22: 
2026-04-16T00:52:47.7111014Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-16T00:52:47.7114791Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-16T00:52:47.7118876Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-16T00:52:47.7122432Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-04-16T00:52:47.7137901Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_test.go:68
2026-04-16T00:52:47.7140430Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_test.go:22
2026-04-16T00:52:47.7141377Z         	Error:      	Received unexpected error:
2026-04-16T00:52:47.7143434Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-16T00:52:47.7144551Z         	Test:       	TestAccLDAPVerify_basic
2026-04-16T00:52:47.7146379Z         	Messages:   	Project creation failed: test-acc-tf-p-4264519583061613951, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-16T00:52:47.7147896Z --- FAIL: TestAccLDAPVerify_basic (65.54s)
```

- 2026-04-17 PASS 3 minutes
- 2026-04-18 PASS 15 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 3 minutes
- 2026-04-21 PASS 17 minutes
- 2026-04-22 PASS 3 minutes
- 2026-04-23 PASS 18 minutes
- 2026-04-24 PASS 3 minutes
- 2026-04-25 PASS 14 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 3 minutes
- 2026-04-28 PASS 14 minutes
- 2026-04-29 PASS 3 minutes
- 2026-04-30

### Error 2026-04-30T00:57:40+00:00
```
2026-04-30T00:57:40.4661856Z === RUN   TestAccLDAPVerify_basic
2026-04-30T00:57:40.4663234Z     resource_ldap_verify_test.go:22: Creating execution project (1): test-acc-tf-p-3186309214385942015
2026-04-30T00:57:40.4664554Z     resource_ldap_verify_test.go:22: 
2026-04-30T00:57:40.4666428Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T00:57:40.4669917Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T00:57:40.4673464Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T00:57:40.4677258Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-04-30T00:57:40.4681045Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_test.go:68
2026-04-30T00:57:40.4685197Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_test.go:22
2026-04-30T00:57:40.4686848Z         	Error:      	Received unexpected error:
2026-04-30T00:57:40.4690571Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T00:57:40.4692830Z         	Test:       	TestAccLDAPVerify_basic
2026-04-30T00:57:40.4696723Z         	Messages:   	Project creation failed: test-acc-tf-p-3186309214385942015, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T00:57:40.4699151Z --- FAIL: TestAccLDAPVerify_basic (64.52s)
```

- 2026-05-01 PASS 3 minutes
- 2026-05-02 PASS 14 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 3 minutes
- 2026-05-05 PASS 21 minutes
- 2026-05-06 PASS 3 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 3 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 3 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 3 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 3 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 3 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 3 minutes
- 2026-05-04 PASS 3 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 3 minutes
