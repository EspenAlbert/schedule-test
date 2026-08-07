# ldap/ldapconfiguration/TestAccLDAPConfiguration_withVerify_CACertificateComplete Test Details
# Found 33 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 22) FAIL(x 11)
Success rate: 66.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:51](#error-2026-07-09t0051340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 85.10s
[2026-07-10 01:24](#error-2026-07-10t0124090000) | LDAP_HOSTNAME_NOT_ALLOWED /api/atlas/v2/groups/6a5041a1af0479f8ffb2e43b/userSecurity/ldap/verify | dev |  | 2067.01s
[2026-07-11 00:45](#error-2026-07-11t0045350000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 76.07s
[2026-07-13 01:03](#error-2026-07-13t0103270000) | LDAP_HOSTNAME_NOT_ALLOWED /api/atlas/v2/groups/6a54356da3b75f3f04491cc3/userSecurity/ldap/verify | dev |  | 1004.10s
[2026-07-14 00:56](#error-2026-07-14t0056350000) | LDAP_HOSTNAME_NOT_ALLOWED /api/atlas/v2/groups/6a5585a5281936d9b18af7fd/userSecurity/ldap/verify | dev |  | 919.07s
[2026-07-18 00:43](#error-2026-07-18t0043370000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 81.01s
[2026-07-23 02:00](#error-2026-07-23t0200000000) | CheckFailure for ldap_verify.test at Step: 1 Checks: 7,8,10,11,12,13,14,15,16,17,18 | dev |  | 4509.03s
[2026-07-30 01:51](#error-2026-07-30t0151330000) | CheckFailure for ldap_verify.test at Step: 1 Checks: 7,8,9,10,11,12,13,14,15,16,17,18 | dev |  | 4171.08s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:51:34+00:00
```
2026-07-09T00:51:34.2082956Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2026-07-09T00:51:34.2083913Z     resource_ldap_configuration_test.go:33: Creating execution project (1): test-acc-tf-p-4618388740205715413
2026-07-09T00:51:34.2084732Z     resource_ldap_configuration_test.go:33: 
2026-07-09T00:51:34.2085879Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:51:34.2087758Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:51:34.2089625Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:51:34.2091630Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-09T00:51:34.2093690Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapconfiguration/resource_ldap_configuration_test.go:33
2026-07-09T00:51:34.2095122Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-09T00:51:34.2095900Z         	Error:      	Received unexpected error:
2026-07-09T00:51:34.2097931Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:51:34.2099412Z         	Test:       	TestAccLDAPConfiguration_withVerify_CACertificateComplete
2026-07-09T00:51:34.2101426Z         	Messages:   	Project creation failed: test-acc-tf-p-4618388740205715413, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:51:34.2102877Z --- FAIL: TestAccLDAPConfiguration_withVerify_CACertificateComplete (85.98s)
```

- 2026-07-10

### Error 2026-07-10T01:24:09+00:00
```
2026-07-10T01:24:09.8256798Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2026-07-10T01:24:09.8274715Z    test_working_directory=/tmp/plugintest504632100 test_step_number=1 test_name=TestAccLDAPConfiguration_withVerify_CACertificateComplete
2026-07-10T01:24:09.8276584Z     resource_ldap_configuration_test.go:43: Step 1/1 error: Error running apply: exit status 1
2026-07-10T01:24:09.8277576Z         
2026-07-10T01:24:09.8280212Z         Error: error creating MongoDB LDAPVerify (6a5041a1af0479f8ffb2e43b): https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a5041a1af0479f8ffb2e43b/userSecurity/ldap/verify POST: HTTP 400 Bad Request (Error code: "LDAP_HOSTNAME_NOT_ALLOWED") Detail: The LDAP hostname *** is not allowed. Reason: Bad Request. Params: [***], BadRequestDetail: 
2026-07-10T01:24:09.8281854Z         
2026-07-10T01:24:09.8282285Z           with mongodbatlas_ldap_verify.test,
2026-07-10T01:24:09.8283062Z           on terraform_plugin_test.tf line 39, in resource "mongodbatlas_ldap_verify" "test":
2026-07-10T01:24:09.8284159Z           39: 		resource "mongodbatlas_ldap_verify" "test" {
2026-07-10T01:24:09.8284625Z         
2026-07-10T01:24:09.8285224Z --- FAIL: TestAccLDAPConfiguration_withVerify_CACertificateComplete (2067.07s)
```

- 2026-07-11

### Error 2026-07-11T00:45:35+00:00
```
2026-07-11T00:45:35.7524636Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2026-07-11T00:45:35.7525486Z     resource_ldap_configuration_test.go:33: Creating execution project (1): test-acc-tf-p-5737521567948348814
2026-07-11T00:45:35.7526192Z     resource_ldap_configuration_test.go:33: 
2026-07-11T00:45:35.7527244Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:45:35.7529226Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:45:35.7531484Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:45:35.7533307Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-11T00:45:35.7535448Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapconfiguration/resource_ldap_configuration_test.go:33
2026-07-11T00:45:35.7537035Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-11T00:45:35.7537649Z         	Error:      	Received unexpected error:
2026-07-11T00:45:35.7539937Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:45:35.7541208Z         	Test:       	TestAccLDAPConfiguration_withVerify_CACertificateComplete
2026-07-11T00:45:35.7543183Z         	Messages:   	Project creation failed: test-acc-tf-p-5737521567948348814, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:45:35.7544718Z --- FAIL: TestAccLDAPConfiguration_withVerify_CACertificateComplete (76.68s)
```

- 2026-07-12: MISSING
- 2026-07-13

### Error 2026-07-13T01:03:27+00:00
```
2026-07-13T01:03:27.6238738Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2026-07-13T01:03:27.6261651Z    test_name=TestAccLDAPConfiguration_withVerify_CACertificateComplete
2026-07-13T01:03:27.6262905Z     resource_ldap_configuration_test.go:43: Step 1/1 error: Error running apply: exit status 1
2026-07-13T01:03:27.6263767Z         
2026-07-13T01:03:27.6268135Z         Error: error creating MongoDB LDAPVerify (6a54356da3b75f3f04491cc3): https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a54356da3b75f3f04491cc3/userSecurity/ldap/verify POST: HTTP 400 Bad Request (Error code: "LDAP_HOSTNAME_NOT_ALLOWED") Detail: The LDAP hostname *** is not allowed. Reason: Bad Request. Params: [***], BadRequestDetail: 
2026-07-13T01:03:27.6270618Z         
2026-07-13T01:03:27.6271275Z           with mongodbatlas_ldap_verify.test,
2026-07-13T01:03:27.6272501Z           on terraform_plugin_test.tf line 39, in resource "mongodbatlas_ldap_verify" "test":
2026-07-13T01:03:27.6273645Z           39: 		resource "mongodbatlas_ldap_verify" "test" {
2026-07-13T01:03:27.6274437Z         
2026-07-13T01:03:27.6275306Z --- FAIL: TestAccLDAPConfiguration_withVerify_CACertificateComplete (1004.98s)
```

- 2026-07-14

### Error 2026-07-14T00:56:35+00:00
```
2026-07-14T00:56:35.4086081Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2026-07-14T00:56:35.4101247Z    test_step_number=1 test_terraform_path=/home/runner/work/_temp/eeac5678-1773-4238-883b-9465d7baea9f/terraform
2026-07-14T00:56:35.4102190Z     resource_ldap_configuration_test.go:43: Step 1/1 error: Error running apply: exit status 1
2026-07-14T00:56:35.4102753Z         
2026-07-14T00:56:35.4105628Z         Error: error creating MongoDB LDAPVerify (6a5585a5281936d9b18af7fd): https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a5585a5281936d9b18af7fd/userSecurity/ldap/verify POST: HTTP 400 Bad Request (Error code: "LDAP_HOSTNAME_NOT_ALLOWED") Detail: The LDAP hostname *** is not allowed. Reason: Bad Request. Params: [***], BadRequestDetail: 
2026-07-14T00:56:35.4107127Z         
2026-07-14T00:56:35.4107551Z           with mongodbatlas_ldap_verify.test,
2026-07-14T00:56:35.4108324Z           on terraform_plugin_test.tf line 39, in resource "mongodbatlas_ldap_verify" "test":
2026-07-14T00:56:35.4109053Z           39: 		resource "mongodbatlas_ldap_verify" "test" {
2026-07-14T00:56:35.4109470Z         
2026-07-14T00:56:35.4109929Z --- FAIL: TestAccLDAPConfiguration_withVerify_CACertificateComplete (919.67s)
```

- 2026-07-15 PASS 24 minutes
- 2026-07-16 PASS an hour
- 2026-07-17 PASS 24 minutes
- 2026-07-18

### Error 2026-07-18T00:43:37+00:00
```
2026-07-18T00:43:37.1938671Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2026-07-18T00:43:37.1939517Z     resource_ldap_configuration_test.go:33: Creating execution project (1): test-acc-tf-p-2971015903786904130
2026-07-18T00:43:37.1940208Z     resource_ldap_configuration_test.go:33: 
2026-07-18T00:43:37.1941465Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:43:37.1943373Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T00:43:37.1945555Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T00:43:37.1947416Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-18T00:43:37.1949595Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapconfiguration/resource_ldap_configuration_test.go:33
2026-07-18T00:43:37.1950983Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-18T00:43:37.1951588Z         	Error:      	Received unexpected error:
2026-07-18T00:43:37.1953638Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:43:37.1954897Z         	Test:       	TestAccLDAPConfiguration_withVerify_CACertificateComplete
2026-07-18T00:43:37.1957161Z         	Messages:   	Project creation failed: test-acc-tf-p-2971015903786904130, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:43:37.1958701Z --- FAIL: TestAccLDAPConfiguration_withVerify_CACertificateComplete (81.14s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21 PASS 18 minutes
- 2026-07-22 PASS 39 minutes
- 2026-07-23

### Error 2026-07-23T02:00:00+00:00
```
2026-07-23T02:00:00.5202864Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2026-07-23T02:00:00.5213173Z   
2026-07-23T02:00:00.5213919Z     resource_ldap_configuration_test.go:43: Step 1/1 error: Check failed: Check 7/18 error: mongodbatlas_ldap_verify.test: Attribute 'status' expected "SUCCESS", got "FAILED"
2026-07-23T02:00:00.5214966Z         Check 8/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.#' expected "5", got "1"
2026-07-23T02:00:00.5215764Z         Check 10/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.0.status' expected "OK", got "FAIL"
2026-07-23T02:00:00.5216526Z         Check 11/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.1.validation_type' not found
2026-07-23T02:00:00.5217414Z         Check 12/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.1.status' not found
2026-07-23T02:00:00.5218148Z         Check 13/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.2.validation_type' not found
2026-07-23T02:00:00.5218887Z         Check 14/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.2.status' not found
2026-07-23T02:00:00.5219670Z         Check 15/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.3.validation_type' not found
2026-07-23T02:00:00.5220382Z         Check 16/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.3.status' not found
2026-07-23T02:00:00.5221144Z         Check 17/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.4.validation_type' not found
2026-07-23T02:00:00.5221861Z         Check 18/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.4.status' not found
2026-07-23T02:00:00.5222473Z --- FAIL: TestAccLDAPConfiguration_withVerify_CACertificateComplete (4509.28s)
```

- 2026-07-24 PASS 32 minutes
- 2026-07-25 PASS 24 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28 PASS 53 minutes
- 2026-07-29 PASS 23 minutes
- 2026-07-30

### Error 2026-07-30T01:51:33+00:00
```
2026-07-30T01:51:33.4663282Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2026-07-30T01:51:33.4676864Z   
2026-07-30T01:51:33.4677839Z     resource_ldap_configuration_test.go:43: Step 1/1 error: Check failed: Check 7/18 error: mongodbatlas_ldap_verify.test: Attribute 'status' expected "SUCCESS", got "FAILED"
2026-07-30T01:51:33.4679047Z         Check 8/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.#' expected "5", got "0"
2026-07-30T01:51:33.4680030Z         Check 9/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.0.validation_type' not found
2026-07-30T01:51:33.4681198Z         Check 10/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.0.status' not found
2026-07-30T01:51:33.4682175Z         Check 11/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.1.validation_type' not found
2026-07-30T01:51:33.4683109Z         Check 12/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.1.status' not found
2026-07-30T01:51:33.4684062Z         Check 13/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.2.validation_type' not found
2026-07-30T01:51:33.4685000Z         Check 14/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.2.status' not found
2026-07-30T01:51:33.4686159Z         Check 15/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.3.validation_type' not found
2026-07-30T01:51:33.4687110Z         Check 16/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.3.status' not found
2026-07-30T01:51:33.4688058Z         Check 17/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.4.validation_type' not found
2026-07-30T01:51:33.4688997Z         Check 18/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.4.status' not found
2026-07-30T01:51:33.4689708Z --- FAIL: TestAccLDAPConfiguration_withVerify_CACertificateComplete (4171.77s)
```

- 2026-07-31 PASS 19 minutes
- 2026-08-01 PASS 18 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 17 minutes
- 2026-08-04 PASS 19 minutes
- 2026-08-05 PASS 17 minutes
- 2026-08-06 PASS 18 minutes
- 2026-08-07 PASS 18 minutes

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-07-12 01:05](#error-2026-07-12t0105090000) | LDAP_HOSTNAME_NOT_ALLOWED /api/atlas/v2/groups/6a52e45254924de0baf4a87a/userSecurity/ldap/verify | qa | 1005.04s
[2026-07-15 07:39](#error-2026-07-15t0739440000) | LDAP_HOSTNAME_NOT_ALLOWED /api/atlas/v2/groups/6a5735828f62f9b41280c7a6/userSecurity/ldap/verify | qa | 950.07s
[2026-07-15 09:47](#error-2026-07-15t0947540000) | LDAP_HOSTNAME_NOT_ALLOWED /api/atlas/v2/groups/6a5753ad8f62f9b412918c81/userSecurity/ldap/verify | qa | 919.01s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12

### Error 2026-07-12T01:05:09+00:00
```
2026-07-12T01:05:09.8614256Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2026-07-12T01:05:09.8628387Z    test_terraform_path=/home/runner/work/_temp/bd127272-4f7b-4cb7-81cc-0d2be467c73e/terraform test_step_number=1 test_name=TestAccLDAPConfiguration_withVerify_CACertificateComplete
2026-07-12T01:05:09.8629590Z     resource_ldap_configuration_test.go:43: Step 1/1 error: Error running apply: exit status 1
2026-07-12T01:05:09.8630166Z         
2026-07-12T01:05:09.8632699Z         Error: error creating MongoDB LDAPVerify (6a52e45254924de0baf4a87a): https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a52e45254924de0baf4a87a/userSecurity/ldap/verify POST: HTTP 400 Bad Request (Error code: "LDAP_HOSTNAME_NOT_ALLOWED") Detail: The LDAP hostname *** is not allowed. Reason: Bad Request. Params: [***], BadRequestDetail: 
2026-07-12T01:05:09.8634557Z         
2026-07-12T01:05:09.8634979Z           with mongodbatlas_ldap_verify.test,
2026-07-12T01:05:09.8635739Z           on terraform_plugin_test.tf line 39, in resource "mongodbatlas_ldap_verify" "test":
2026-07-12T01:05:09.8636460Z           39: 		resource "mongodbatlas_ldap_verify" "test" {
2026-07-12T01:05:09.8636883Z         
2026-07-12T01:05:09.8637353Z --- FAIL: TestAccLDAPConfiguration_withVerify_CACertificateComplete (1005.41s)
```

- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - FAIL 15 minutes

### Error 2026-07-15T07:39:44+00:00
```
2026-07-15T07:39:44.2298626Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2026-07-15T07:39:44.2311366Z    test_terraform_path=/home/runner/work/_temp/a8a2c6c3-6b61-427e-953f-e9cb3f4ce631/terraform test_working_directory=/tmp/plugintest2125694627
2026-07-15T07:39:44.2312313Z     resource_ldap_configuration_test.go:43: Step 1/1 error: Error running apply: exit status 1
2026-07-15T07:39:44.2312953Z         
2026-07-15T07:39:44.2315129Z         Error: error creating MongoDB LDAPVerify (6a5735828f62f9b41280c7a6): https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a5735828f62f9b41280c7a6/userSecurity/ldap/verify POST: HTTP 400 Bad Request (Error code: "LDAP_HOSTNAME_NOT_ALLOWED") Detail: The LDAP hostname *** is not allowed. Reason: Bad Request. Params: [***], BadRequestDetail: 
2026-07-15T07:39:44.2316497Z         
2026-07-15T07:39:44.2316920Z           with mongodbatlas_ldap_verify.test,
2026-07-15T07:39:44.2317628Z           on terraform_plugin_test.tf line 39, in resource "mongodbatlas_ldap_verify" "test":
2026-07-15T07:39:44.2318305Z           39: 		resource "mongodbatlas_ldap_verify" "test" {
2026-07-15T07:39:44.2318732Z         
2026-07-15T07:39:44.2319178Z --- FAIL: TestAccLDAPConfiguration_withVerify_CACertificateComplete (950.72s)
```

  - FAIL 15 minutes

### Error 2026-07-15T09:47:54+00:00
```
2026-07-15T09:47:54.5857089Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2026-07-15T09:47:54.5871304Z    test_name=TestAccLDAPConfiguration_withVerify_CACertificateComplete test_terraform_path=/home/runner/work/_temp/29ea9546-50ab-4f02-a929-f792ea8ffe9c/terraform
2026-07-15T09:47:54.5872446Z     resource_ldap_configuration_test.go:43: Step 1/1 error: Error running apply: exit status 1
2026-07-15T09:47:54.5873188Z         
2026-07-15T09:47:54.5875664Z         Error: error creating MongoDB LDAPVerify (6a5753ad8f62f9b412918c81): https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a5753ad8f62f9b412918c81/userSecurity/ldap/verify POST: HTTP 400 Bad Request (Error code: "LDAP_HOSTNAME_NOT_ALLOWED") Detail: The LDAP hostname *** is not allowed. Reason: Bad Request. Params: [***], BadRequestDetail: 
2026-07-15T09:47:54.5877041Z         
2026-07-15T09:47:54.5877463Z           with mongodbatlas_ldap_verify.test,
2026-07-15T09:47:54.5878228Z           on terraform_plugin_test.tf line 39, in resource "mongodbatlas_ldap_verify" "test":
2026-07-15T09:47:54.5878952Z           39: 		resource "mongodbatlas_ldap_verify" "test" {
2026-07-15T09:47:54.5879374Z         
2026-07-15T09:47:54.5879841Z --- FAIL: TestAccLDAPConfiguration_withVerify_CACertificateComplete (919.11s)
```

- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 29 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 21 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 19 minutes
  - PASS 20 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 19 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
