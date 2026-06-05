# ldap/ldapverify/TestAccLDAPVerify_withConfiguration_CACertificate Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 25) FAIL(x 6)
Success rate: 80.65%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-07 01:29](#error-2026-05-07t0129220000) | CheckFailure for ldap_verify.test at Step: 1 Checks: 7,8,9,10,11,12 | dev |  | 182.02s
[2026-05-07 10:29](#error-2026-05-07t1029560000) | CheckFailure for ldap_verify.test at Step: 1 Checks: 7,8,9,10,11,12 | dev |  | 181.09s
[2026-05-16 01:13](#error-2026-05-16t0113160000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.07s
[2026-05-19 01:17](#error-2026-05-19t0117480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.05s
[2026-05-21 01:29](#error-2026-05-21t0129230000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.01s
[2026-05-30 01:18](#error-2026-05-30t0118080000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 80.08s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - FAIL 3 minutes

### Error 2026-05-07T01:29:22+00:00
```
2026-05-07T01:29:22.3481105Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2026-05-07T01:29:22.3487157Z    test_name=TestAccLDAPVerify_withConfiguration_CACertificate test_terraform_path=/home/runner/work/_temp/945484d0-51c3-471e-a1a4-f455ad8a4d9b/terraform
2026-05-07T01:29:22.3488210Z     resource_ldap_verify_test.go:35: Step 1/1 error: Check failed: Check 7/12 error: mongodbatlas_ldap_verify.test: Attribute 'status' expected "SUCCESS", got "FAILED"
2026-05-07T01:29:22.3489086Z         Check 8/12 error: mongodbatlas_ldap_verify.test: Attribute 'validations.#' expected "2", got "0"
2026-05-07T01:29:22.3489818Z         Check 9/12 error: mongodbatlas_ldap_verify.test: Attribute 'validations.0.validation_type' not found
2026-05-07T01:29:22.3490529Z         Check 10/12 error: mongodbatlas_ldap_verify.test: Attribute 'validations.0.status' not found
2026-05-07T01:29:22.3491260Z         Check 11/12 error: mongodbatlas_ldap_verify.test: Attribute 'validations.1.validation_type' not found
2026-05-07T01:29:22.3491958Z         Check 12/12 error: mongodbatlas_ldap_verify.test: Attribute 'validations.1.status' not found
2026-05-07T01:29:22.3492468Z --- FAIL: TestAccLDAPVerify_withConfiguration_CACertificate (182.20s)
```

  - FAIL 3 minutes

### Error 2026-05-07T10:29:56+00:00
```
2026-05-07T10:29:56.5335948Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2026-05-07T10:29:56.5348933Z    test_name=TestAccLDAPVerify_withConfiguration_CACertificate test_terraform_path=/home/runner/work/_temp/756375ed-5866-4b83-b763-46c1e36edef5/terraform test_working_directory=/tmp/plugintest772719191 test_step_number=1
2026-05-07T10:29:56.5351990Z     resource_ldap_verify_test.go:35: Step 1/1 error: Check failed: Check 7/12 error: mongodbatlas_ldap_verify.test: Attribute 'status' expected "SUCCESS", got "FAILED"
2026-05-07T10:29:56.5354043Z         Check 8/12 error: mongodbatlas_ldap_verify.test: Attribute 'validations.#' expected "2", got "0"
2026-05-07T10:29:56.5355761Z         Check 9/12 error: mongodbatlas_ldap_verify.test: Attribute 'validations.0.validation_type' not found
2026-05-07T10:29:56.5357654Z         Check 10/12 error: mongodbatlas_ldap_verify.test: Attribute 'validations.0.status' not found
2026-05-07T10:29:56.5359376Z         Check 11/12 error: mongodbatlas_ldap_verify.test: Attribute 'validations.1.validation_type' not found
2026-05-07T10:29:56.5361081Z         Check 12/12 error: mongodbatlas_ldap_verify.test: Attribute 'validations.1.status' not found
2026-05-07T10:29:56.5362259Z --- FAIL: TestAccLDAPVerify_withConfiguration_CACertificate (181.90s)
```

- 2026-05-08 PASS 3 minutes
- 2026-05-09 PASS 3 minutes
- 2026-05-10: MISSING
- 2026-05-11 PASS 3 minutes
- 2026-05-12 PASS 3 minutes
- 2026-05-13 PASS 3 minutes
- 2026-05-14 PASS 3 minutes
- 2026-05-15 PASS 3 minutes
- 2026-05-16

### Error 2026-05-16T01:13:16+00:00
```
2026-05-16T01:13:16.1234120Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2026-05-16T01:13:16.1234865Z     resource_ldap_verify_test.go:32: Creating execution project (1): test-acc-tf-p-7033088347601912167
2026-05-16T01:13:16.1235495Z     resource_ldap_verify_test.go:32: 
2026-05-16T01:13:16.1236500Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-16T01:13:16.1238370Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-16T01:13:16.1240289Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-16T01:13:16.1242515Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-05-16T01:13:16.1244559Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_test.go:32
2026-05-16T01:13:16.1245865Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-16T01:13:16.1246438Z         	Error:      	Received unexpected error:
2026-05-16T01:13:16.1248456Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:13:16.1249784Z         	Test:       	TestAccLDAPVerify_withConfiguration_CACertificate
2026-05-16T01:13:16.1251848Z         	Messages:   	Project creation failed: test-acc-tf-p-7033088347601912167, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:13:16.1253183Z --- FAIL: TestAccLDAPVerify_withConfiguration_CACertificate (62.74s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 3 minutes
- 2026-05-19

### Error 2026-05-19T01:17:48+00:00
```
2026-05-19T01:17:48.1035600Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2026-05-19T01:17:48.1037238Z     resource_ldap_verify_test.go:32: Creating execution project (1): test-acc-tf-p-5397169518973786326
2026-05-19T01:17:48.1038405Z     resource_ldap_verify_test.go:32: 
2026-05-19T01:17:48.1040310Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:17:48.1044161Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:17:48.1047632Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:17:48.1051095Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-05-19T01:17:48.1055039Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_test.go:32
2026-05-19T01:17:48.1057564Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-19T01:17:48.1058626Z         	Error:      	Received unexpected error:
2026-05-19T01:17:48.1062864Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:17:48.1065087Z         	Test:       	TestAccLDAPVerify_withConfiguration_CACertificate
2026-05-19T01:17:48.1068410Z         	Messages:   	Project creation failed: test-acc-tf-p-5397169518973786326, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:17:48.1070760Z --- FAIL: TestAccLDAPVerify_withConfiguration_CACertificate (63.48s)
```

- 2026-05-20 PASS 3 minutes
- 2026-05-21

### Error 2026-05-21T01:29:23+00:00
```
2026-05-21T01:29:23.6739963Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2026-05-21T01:29:23.6740945Z     resource_ldap_verify_test.go:32: Creating execution project (1): test-acc-tf-p-4599423177804496460
2026-05-21T01:29:23.6741592Z     resource_ldap_verify_test.go:32: 
2026-05-21T01:29:23.6742629Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-21T01:29:23.6745042Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-21T01:29:23.6746948Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-21T01:29:23.6749007Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-05-21T01:29:23.6751049Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_test.go:32
2026-05-21T01:29:23.6752380Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-21T01:29:23.6752983Z         	Error:      	Received unexpected error:
2026-05-21T01:29:23.6755157Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:29:23.6756372Z         	Test:       	TestAccLDAPVerify_withConfiguration_CACertificate
2026-05-21T01:29:23.6758646Z         	Messages:   	Project creation failed: test-acc-tf-p-4599423177804496460, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:29:23.6760012Z --- FAIL: TestAccLDAPVerify_withConfiguration_CACertificate (73.14s)
```

- 2026-05-22 PASS 3 minutes
- 2026-05-23 PASS 3 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 3 minutes
- 2026-05-26 PASS 3 minutes
- 2026-05-27 PASS 3 minutes
- 2026-05-28 PASS 3 minutes
- 2026-05-29 PASS 3 minutes
- 2026-05-30

### Error 2026-05-30T01:18:08+00:00
```
2026-05-30T01:18:08.8916645Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2026-05-30T01:18:08.8918291Z     resource_ldap_verify_test.go:32: Creating execution project (1): test-acc-tf-p-6669532730262907075
2026-05-30T01:18:08.8919437Z     resource_ldap_verify_test.go:32: 
2026-05-30T01:18:08.8921338Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:18:08.8925184Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:18:08.8928767Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:18:08.8932538Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-05-30T01:18:08.8936365Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_test.go:32
2026-05-30T01:18:08.8938819Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-30T01:18:08.8939900Z         	Error:      	Received unexpected error:
2026-05-30T01:18:08.8944046Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:18:08.8946261Z         	Test:       	TestAccLDAPVerify_withConfiguration_CACertificate
2026-05-30T01:18:08.8949770Z         	Messages:   	Project creation failed: test-acc-tf-p-6669532730262907075, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:18:08.8952400Z --- FAIL: TestAccLDAPVerify_withConfiguration_CACertificate (80.76s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 3 minutes
- 2026-06-02 PASS 3 minutes
- 2026-06-03 PASS 3 minutes
- 2026-06-04 PASS 3 minutes
- 2026-06-05 PASS 3 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 3 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 3 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 3 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 3 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
