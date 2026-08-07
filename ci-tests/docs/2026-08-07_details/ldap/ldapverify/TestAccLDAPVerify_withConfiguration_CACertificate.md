# ldap/ldapverify/TestAccLDAPVerify_withConfiguration_CACertificate Test Details
# Found 33 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 22) FAIL(x 11)
Success rate: 66.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:51](#error-2026-07-09t0051340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.08s
[2026-07-10 01:24](#error-2026-07-10t0124090000) | LDAP_HOSTNAME_NOT_ALLOWED /api/atlas/v2/groups/6a5041a1e2b992f4d13ada3e/userSecurity/ldap/verify | dev |  | 0.04s
[2026-07-11 00:59](#error-2026-07-11t0059160000) | LDAP_HOSTNAME_NOT_ALLOWED /api/atlas/v2/groups/6a51919f8329995c4c765b35/userSecurity/ldap/verify | dev |  | 0.06s
[2026-07-13 01:03](#error-2026-07-13t0103270000) | LDAP_HOSTNAME_NOT_ALLOWED /api/atlas/v2/groups/6a54356da3b75f3f044928b7/userSecurity/ldap/verify | dev |  | 0.04s
[2026-07-14 00:57](#error-2026-07-14t0057060000) | LDAP_HOSTNAME_NOT_ALLOWED /api/atlas/v2/groups/6a5585a***f430f45f9ceeca/userSecurity/ldap/verify | dev |  | 0.05s
[2026-07-21 01:02](#error-2026-07-21t0102510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.01s
[2026-07-23 02:00](#error-2026-07-23t0200000000) | CheckFailure for ldap_verify.test at Step: 1 Checks: 7,8,10,11,12 | dev |  | 182.01s
[2026-07-30 02:03](#error-2026-07-30t0203350000) | CheckFailure for ldap_verify.test at Step: 1 Checks: 7,8,9,10,11,12 | dev |  | 451.05s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:51:34+00:00
```
2026-07-09T00:51:34.2124308Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2026-07-09T00:51:34.2125248Z     resource_ldap_verify_test.go:32: Creating execution project (1): test-acc-tf-p-2045140227188047232
2026-07-09T00:51:34.2126039Z     resource_ldap_verify_test.go:32: 
2026-07-09T00:51:34.2127192Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:51:34.2129128Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:51:34.2131272Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:51:34.2133223Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-09T00:51:34.2135283Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_test.go:32
2026-07-09T00:51:34.2136726Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-09T00:51:34.2137524Z         	Error:      	Received unexpected error:
2026-07-09T00:51:34.2139559Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:51:34.2141127Z         	Test:       	TestAccLDAPVerify_withConfiguration_CACertificate
2026-07-09T00:51:34.2143098Z         	Messages:   	Project creation failed: test-acc-tf-p-2045140227188047232, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:51:34.2144593Z --- FAIL: TestAccLDAPVerify_withConfiguration_CACertificate (64.77s)
```

- 2026-07-10

### Error 2026-07-10T01:24:09+00:00
```
2026-07-10T01:24:09.8334721Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2026-07-10T01:24:09.8350356Z   
2026-07-10T01:24:09.8350906Z     resource_ldap_verify_test.go:35: Step 1/1 error: Error running apply: exit status 1
2026-07-10T01:24:09.8351434Z         
2026-07-10T01:24:09.8354115Z         Error: error creating MongoDB LDAPVerify (6a5041a1e2b992f4d13ada3e): https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a5041a1e2b992f4d13ada3e/userSecurity/ldap/verify POST: HTTP 400 Bad Request (Error code: "LDAP_HOSTNAME_NOT_ALLOWED") Detail: The LDAP hostname *** is not allowed. Reason: Bad Request. Params: [***], BadRequestDetail: 
2026-07-10T01:24:09.8355537Z         
2026-07-10T01:24:09.8355946Z           with mongodbatlas_ldap_verify.test,
2026-07-10T01:24:09.8356707Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_ldap_verify" "test":
2026-07-10T01:24:09.8357431Z           12: 		resource "mongodbatlas_ldap_verify" "test" {
2026-07-10T01:24:09.8357847Z         
2026-07-10T01:24:09.8358262Z --- FAIL: TestAccLDAPVerify_withConfiguration_CACertificate (0.44s)
```

- 2026-07-11

### Error 2026-07-11T00:59:16+00:00
```
2026-07-11T00:59:16.7378600Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2026-07-11T00:59:16.7404209Z    test_name=TestAccLDAPVerify_withConfiguration_CACertificate test_terraform_path=/home/runner/work/_temp/ad6a4e16-30a9-4d43-99a2-74097bfe4d4e/terraform test_working_directory=/tmp/plugintest3307036579
2026-07-11T00:59:16.7406361Z     resource_ldap_verify_test.go:35: Step 1/1 error: Error running apply: exit status 1
2026-07-11T00:59:16.7407271Z         
2026-07-11T00:59:16.7411987Z         Error: error creating MongoDB LDAPVerify (6a51919f8329995c4c765b35): https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a51919f8329995c4c765b35/userSecurity/ldap/verify POST: HTTP 400 Bad Request (Error code: "LDAP_HOSTNAME_NOT_ALLOWED") Detail: The LDAP hostname *** is not allowed. Reason: Bad Request. Params: [***], BadRequestDetail: 
2026-07-11T00:59:16.7414846Z         
2026-07-11T00:59:16.7415570Z           with mongodbatlas_ldap_verify.test,
2026-07-11T00:59:16.7416909Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_ldap_verify" "test":
2026-07-11T00:59:16.7418159Z           12: 		resource "mongodbatlas_ldap_verify" "test" {
2026-07-11T00:59:16.7418899Z         
2026-07-11T00:59:16.7419814Z --- FAIL: TestAccLDAPVerify_withConfiguration_CACertificate (0.64s)
```

- 2026-07-12: MISSING
- 2026-07-13

### Error 2026-07-13T01:03:27+00:00
```
2026-07-13T01:03:27.6333223Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2026-07-13T01:03:27.6361875Z    test_step_number=1 test_name=TestAccLDAPVerify_withConfiguration_CACertificate
2026-07-13T01:03:27.6362842Z     resource_ldap_verify_test.go:35: Step 1/1 error: Error running apply: exit status 1
2026-07-13T01:03:27.6363509Z         
2026-07-13T01:03:27.6366590Z         Error: error creating MongoDB LDAPVerify (6a54356da3b75f3f044928b7): https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a54356da3b75f3f044928b7/userSecurity/ldap/verify POST: HTTP 400 Bad Request (Error code: "LDAP_HOSTNAME_NOT_ALLOWED") Detail: The LDAP hostname *** is not allowed. Reason: Bad Request. Params: [***], BadRequestDetail: 
2026-07-13T01:03:27.6368606Z         
2026-07-13T01:03:27.6369074Z           with mongodbatlas_ldap_verify.test,
2026-07-13T01:03:27.6369960Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_ldap_verify" "test":
2026-07-13T01:03:27.6370874Z           12: 		resource "mongodbatlas_ldap_verify" "test" {
2026-07-13T01:03:27.6371380Z         
2026-07-13T01:03:27.6371938Z --- FAIL: TestAccLDAPVerify_withConfiguration_CACertificate (0.43s)
```

- 2026-07-14

### Error 2026-07-14T00:57:06+00:00
```
2026-07-14T00:57:06.1617169Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2026-07-14T00:57:06.1633221Z    test_name=TestAccLDAPVerify_withConfiguration_CACertificate test_terraform_path=/home/runner/work/_temp/eeac5678-1773-4238-883b-9465d7baea9f/terraform test_working_directory=/tmp/plugintest1173078218 test_step_number=1
2026-07-14T00:57:06.1634691Z     resource_ldap_verify_test.go:35: Step 1/1 error: Error running apply: exit status 1
2026-07-14T00:57:06.1635428Z         
2026-07-14T00:57:06.1638068Z         Error: error creating MongoDB LDAPVerify (6a5585a***f430f45f9ceeca): https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a5585a***f430f45f9ceeca/userSecurity/ldap/verify POST: HTTP 400 Bad Request (Error code: "LDAP_HOSTNAME_NOT_ALLOWED") Detail: The LDAP hostname *** is not allowed. Reason: Bad Request. Params: [***], BadRequestDetail: 
2026-07-14T00:57:06.1639499Z         
2026-07-14T00:57:06.1639917Z           with mongodbatlas_ldap_verify.test,
2026-07-14T00:57:06.1640686Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_ldap_verify" "test":
2026-07-14T00:57:06.1641398Z           12: 		resource "mongodbatlas_ldap_verify" "test" {
2026-07-14T00:57:06.1641817Z         
2026-07-14T00:57:06.1642226Z --- FAIL: TestAccLDAPVerify_withConfiguration_CACertificate (0.50s)
```

- 2026-07-15 PASS 3 minutes
- 2026-07-16 PASS 3 minutes
- 2026-07-17 PASS 3 minutes
- 2026-07-18 PASS 3 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T01:02:51+00:00
```
2026-07-21T01:02:51.1966091Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2026-07-21T01:02:51.1967431Z     resource_ldap_verify_test.go:32: Creating execution project (1): test-acc-tf-p-480152161958557036
2026-07-21T01:02:51.1968436Z     resource_ldap_verify_test.go:32: 
2026-07-21T01:02:51.1970066Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T01:02:51.1973144Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T01:02:51.1976293Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T01:02:51.1979707Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-21T01:02:51.1983022Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_test.go:32
2026-07-21T01:02:51.1985156Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T01:02:51.1986095Z         	Error:      	Received unexpected error:
2026-07-21T01:02:51.1989740Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T01:02:51.1991708Z         	Test:       	TestAccLDAPVerify_withConfiguration_CACertificate
2026-07-21T01:02:51.1994719Z         	Messages:   	Project creation failed: test-acc-tf-p-480152161958557036, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T01:02:51.1996997Z --- FAIL: TestAccLDAPVerify_withConfiguration_CACertificate (64.08s)
```

- 2026-07-22 PASS 3 minutes
- 2026-07-23

### Error 2026-07-23T02:00:00+00:00
```
2026-07-23T02:00:00.5493615Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2026-07-23T02:00:00.5499861Z   
2026-07-23T02:00:00.5500628Z     resource_ldap_verify_test.go:35: Step 1/1 error: Check failed: Check 7/12 error: mongodbatlas_ldap_verify.test: Attribute 'status' expected "SUCCESS", got "FAILED"
2026-07-23T02:00:00.5501494Z         Check 8/12 error: mongodbatlas_ldap_verify.test: Attribute 'validations.#' expected "2", got "1"
2026-07-23T02:00:00.5502263Z         Check 10/12 error: mongodbatlas_ldap_verify.test: Attribute 'validations.0.status' expected "OK", got "FAIL"
2026-07-23T02:00:00.5503130Z         Check 11/12 error: mongodbatlas_ldap_verify.test: Attribute 'validations.1.validation_type' not found
2026-07-23T02:00:00.5503865Z         Check 12/12 error: mongodbatlas_ldap_verify.test: Attribute 'validations.1.status' not found
2026-07-23T02:00:00.5504401Z --- FAIL: TestAccLDAPVerify_withConfiguration_CACertificate (182.09s)
```

- 2026-07-24 PASS 3 minutes
- 2026-07-25 PASS 3 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS 3 minutes
- 2026-07-28 PASS 3 minutes
- 2026-07-29 PASS 3 minutes
- 2026-07-30

### Error 2026-07-30T02:03:35+00:00
```
2026-07-30T02:03:35.6690457Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2026-07-30T02:03:35.6704123Z    test_name=TestAccLDAPVerify_withConfiguration_CACertificate
2026-07-30T02:03:35.6705492Z     resource_ldap_verify_test.go:35: Step 1/1 error: Check failed: Check 7/12 error: mongodbatlas_ldap_verify.test: Attribute 'status' expected "SUCCESS", got "FAILED"
2026-07-30T02:03:35.6706712Z         Check 8/12 error: mongodbatlas_ldap_verify.test: Attribute 'validations.#' expected "2", got "0"
2026-07-30T02:03:35.6707707Z         Check 9/12 error: mongodbatlas_ldap_verify.test: Attribute 'validations.0.validation_type' not found
2026-07-30T02:03:35.6708672Z         Check 10/12 error: mongodbatlas_ldap_verify.test: Attribute 'validations.0.status' not found
2026-07-30T02:03:35.6709646Z         Check 11/12 error: mongodbatlas_ldap_verify.test: Attribute 'validations.1.validation_type' not found
2026-07-30T02:03:35.6710591Z         Check 12/12 error: mongodbatlas_ldap_verify.test: Attribute 'validations.1.status' not found
2026-07-30T02:03:35.6711279Z --- FAIL: TestAccLDAPVerify_withConfiguration_CACertificate (451.51s)
```

- 2026-07-31 PASS 3 minutes
- 2026-08-01 PASS 3 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 3 minutes
- 2026-08-04 PASS 3 minutes
- 2026-08-05 PASS 3 minutes
- 2026-08-06 PASS 3 minutes
- 2026-08-07 PASS 3 minutes

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-07-12 01:06](#error-2026-07-12t0106030000) | LDAP_HOSTNAME_NOT_ALLOWED /api/atlas/v2/groups/6a52e45354924de0baf4a912/userSecurity/ldap/verify | qa | 0.04s
[2026-07-15 07:40](#error-2026-07-15t0740130000) | LDAP_HOSTNAME_NOT_ALLOWED /api/atlas/v2/groups/6a57358293daee1cb09fd430/userSecurity/ldap/verify | qa | 0.05s
[2026-07-15 09:47](#error-2026-07-15t0947540000) | LDAP_HOSTNAME_NOT_ALLOWED /api/atlas/v2/groups/6a5753ae8f62f9b412918db2/userSecurity/ldap/verify | qa | 0.05s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12

### Error 2026-07-12T01:06:03+00:00
```
2026-07-12T01:06:03.5305451Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2026-07-12T01:06:03.5321941Z    test_name=TestAccLDAPVerify_withConfiguration_CACertificate test_terraform_path=/home/runner/work/_temp/bd127272-4f7b-4cb7-81cc-0d2be467c73e/terraform
2026-07-12T01:06:03.5322993Z     resource_ldap_verify_test.go:35: Step 1/1 error: Error running apply: exit status 1
2026-07-12T01:06:03.5323811Z         
2026-07-12T01:06:03.5326431Z         Error: error creating MongoDB LDAPVerify (6a52e45354924de0baf4a912): https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a52e45354924de0baf4a912/userSecurity/ldap/verify POST: HTTP 400 Bad Request (Error code: "LDAP_HOSTNAME_NOT_ALLOWED") Detail: The LDAP hostname *** is not allowed. Reason: Bad Request. Params: [***], BadRequestDetail: 
2026-07-12T01:06:03.5329259Z         
2026-07-12T01:06:03.5329694Z           with mongodbatlas_ldap_verify.test,
2026-07-12T01:06:03.5330468Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_ldap_verify" "test":
2026-07-12T01:06:03.5331182Z           12: 		resource "mongodbatlas_ldap_verify" "test" {
2026-07-12T01:06:03.5331615Z         
2026-07-12T01:06:03.5332080Z --- FAIL: TestAccLDAPVerify_withConfiguration_CACertificate (0.40s)
```

- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - FAIL a moment

### Error 2026-07-15T07:40:13+00:00
```
2026-07-15T07:40:13.7896713Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2026-07-15T07:40:13.7915150Z    test_name=TestAccLDAPVerify_withConfiguration_CACertificate test_terraform_path=/home/runner/work/_temp/a8a2c6c3-6b61-427e-953f-e9cb3f4ce631/terraform
2026-07-15T07:40:13.7916731Z     resource_ldap_verify_test.go:35: Step 1/1 error: Error running apply: exit status 1
2026-07-15T07:40:13.7917629Z         
2026-07-15T07:40:13.7921017Z         Error: error creating MongoDB LDAPVerify (6a57358293daee1cb09fd430): https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a57358293daee1cb09fd430/userSecurity/ldap/verify POST: HTTP 400 Bad Request (Error code: "LDAP_HOSTNAME_NOT_ALLOWED") Detail: The LDAP hostname *** is not allowed. Reason: Bad Request. Params: [***], BadRequestDetail: 
2026-07-15T07:40:13.7922912Z         
2026-07-15T07:40:13.7923502Z           with mongodbatlas_ldap_verify.test,
2026-07-15T07:40:13.7924491Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_ldap_verify" "test":
2026-07-15T07:40:13.7925597Z           12: 		resource "mongodbatlas_ldap_verify" "test" {
2026-07-15T07:40:13.7926178Z         
2026-07-15T07:40:13.7926766Z --- FAIL: TestAccLDAPVerify_withConfiguration_CACertificate (0.49s)
```

  - FAIL a moment

### Error 2026-07-15T09:47:54+00:00
```
2026-07-15T09:47:54.5916329Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2026-07-15T09:47:54.5930914Z   
2026-07-15T09:47:54.5931475Z     resource_ldap_verify_test.go:35: Step 1/1 error: Error running apply: exit status 1
2026-07-15T09:47:54.5932011Z         
2026-07-15T09:47:54.5934483Z         Error: error creating MongoDB LDAPVerify (6a5753ae8f62f9b412918db2): https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a5753ae8f62f9b412918db2/userSecurity/ldap/verify POST: HTTP 400 Bad Request (Error code: "LDAP_HOSTNAME_NOT_ALLOWED") Detail: The LDAP hostname *** is not allowed. Reason: Bad Request. Params: [***], BadRequestDetail: 
2026-07-15T09:47:54.5936004Z         
2026-07-15T09:47:54.5936443Z           with mongodbatlas_ldap_verify.test,
2026-07-15T09:47:54.5937248Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_ldap_verify" "test":
2026-07-15T09:47:54.5937975Z           12: 		resource "mongodbatlas_ldap_verify" "test" {
2026-07-15T09:47:54.5938409Z         
2026-07-15T09:47:54.5938839Z --- FAIL: TestAccLDAPVerify_withConfiguration_CACertificate (0.46s)
```

- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 3 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 3 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 3 minutes
  - PASS 3 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 3 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
