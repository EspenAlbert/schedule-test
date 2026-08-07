# ldap/ldapverify/TestMigLDAPVerify_basic Test Details
# Found 19 TestRuns in dev, qa from 2026-07-10 to 2026-08-07 from master branch: 1 unique tests, PASS(x 14) FAIL(x 5)
Success rate: 73.68%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-07-10 01:24](#error-2026-07-10t0124090000) | LDAP_HOSTNAME_NOT_ALLOWED /api/atlas/v2/groups/6a5041a1e2b992f4d13ada3e/userSecurity/ldap/verify | dev | 1443.08s
[2026-07-13 01:03](#error-2026-07-13t0103270000) | LDAP_HOSTNAME_NOT_ALLOWED /api/atlas/v2/groups/6a54356da3b75f3f044928b7/userSecurity/ldap/verify | dev | 809.05s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10

### Error 2026-07-10T01:24:09+00:00
```
2026-07-10T01:24:09.8287772Z === RUN   TestMigLDAPVerify_basic
2026-07-10T01:24:09.8288534Z     resource_ldap_verify_migration_test.go:10: Creating execution project (1): test-acc-tf-p-8862891754173273759
2026-07-10T01:24:09.8289972Z     resource_ldap_verify_migration_test.go:10: Creating execution cluster: test-acc-tf-c-927097268414236936
2026-07-10T01:24:09.8291275Z 2026/07/10 00:49:40 [DEBUG] Waiting for state to become: [IDLE]
2026-07-10T01:24:09.8292220Z 2026/07/10 00:52:41 [TRACE] Waiting 1m0s before next try
2026-07-10T01:24:09.8293097Z 2026/07/10 00:53:41 [TRACE] Waiting 10s before next try
2026-07-10T01:24:09.8294128Z 2026/07/10 00:53:51 [TRACE] Waiting 1m0s before next try
2026-07-10T01:24:09.8294618Z 2026/07/10 00:54:52 [TRACE] Waiting 10s before next try
2026-07-10T01:24:09.8295083Z 2026/07/10 00:55:02 [TRACE] Waiting 1m0s before next try
2026-07-10T01:24:09.8295560Z 2026/07/10 00:56:02 [TRACE] Waiting 10s before next try
2026-07-10T01:24:09.8296036Z 2026/07/10 00:56:12 [TRACE] Waiting 1m0s before next try
2026-07-10T01:24:09.8296495Z 2026/07/10 00:57:13 [TRACE] Waiting 10s before next try
2026-07-10T01:24:09.8296952Z 2026/07/10 00:57:23 [TRACE] Waiting 1m0s before next try
2026-07-10T01:24:09.8297407Z 2026/07/10 00:58:23 [TRACE] Waiting 10s before next try
2026-07-10T01:24:09.8297866Z 2026/07/10 00:58:33 [TRACE] Waiting 1m0s before next try
2026-07-10T01:24:09.8298333Z 2026/07/10 00:59:33 [TRACE] Waiting 10s before next try
2026-07-10T01:24:09.8298797Z 2026/07/10 00:59:44 [TRACE] Waiting 1m0s before next try
2026-07-10T01:24:09.8299251Z 2026/07/10 01:00:44 [TRACE] Waiting 10s before next try
2026-07-10T01:24:09.8299708Z 2026/07/10 01:00:54 [TRACE] Waiting 1m0s before next try
2026-07-10T01:24:09.8300165Z 2026/07/10 01:01:55 [TRACE] Waiting 10s before next try
2026-07-10T01:24:09.8300627Z 2026/07/10 01:02:05 [TRACE] Waiting 1m0s before next try
2026-07-10T01:24:09.8301087Z 2026/07/10 01:03:05 [TRACE] Waiting 10s before next try
2026-07-10T01:24:09.8301545Z 2026/07/10 01:03:15 [TRACE] Waiting 1m0s before next try
2026-07-10T01:24:09.8301998Z 2026/07/10 01:04:16 [TRACE] Waiting 10s before next try
2026-07-10T01:24:09.8302450Z 2026/07/10 01:04:26 [TRACE] Waiting 1m0s before next try
2026-07-10T01:24:09.8302906Z 2026/07/10 01:05:26 [TRACE] Waiting 10s before next try
2026-07-10T01:24:09.8303609Z 2026/07/10 01:05:36 [TRACE] Waiting 1m0s before next try
2026-07-10T01:24:09.8304077Z 2026/07/10 01:06:37 [TRACE] Waiting 10s before next try
2026-07-10T01:24:09.8304526Z 2026/07/10 01:06:47 [TRACE] Waiting 1m0s before next try
2026-07-10T01:24:09.8304983Z 2026/07/10 01:07:47 [TRACE] Waiting 10s before next try
2026-07-10T01:24:09.8305435Z 2026/07/10 01:07:57 [TRACE] Waiting 1m0s before next try
2026-07-10T01:24:09.8305895Z 2026/07/10 01:08:58 [TRACE] Waiting 10s before next try
2026-07-10T01:24:09.8306348Z 2026/07/10 01:09:08 [TRACE] Waiting 1m0s before next try
2026-07-10T01:24:09.8306806Z 2026/07/10 01:10:08 [TRACE] Waiting 10s before next try
2026-07-10T01:24:09.8307995Z 2026/07/10 01:10:18 [TRACE] Waiting 1m0s before next try
2026-07-10T01:24:09.8308850Z 2026/07/10 01:11:19 [TRACE] Waiting 10s before next try
2026-07-10T01:24:09.8309339Z 2026/07/10 01:11:29 [TRACE] Waiting 1m0s before next try
2026-07-10T01:24:09.8309803Z 2026/07/10 01:12:29 [TRACE] Waiting 10s before next try
2026-07-10T01:24:09.8310266Z 2026/07/10 01:12:39 [TRACE] Waiting 1m0s before next try
2026-07-10T01:24:09.8358762Z === CONT  TestMigLDAPVerify_basic
2026-07-10T01:24:09.8367638Z   
2026-07-10T01:24:09.8368231Z     resource_ldap_verify_migration_test.go:10: Step 1/2 error: Error running apply: exit status 1
2026-07-10T01:24:09.8368798Z         
2026-07-10T01:24:09.8371320Z         Error: error creating MongoDB LDAPVerify (6a5041a1e2b992f4d13ada3e): https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a5041a1e2b992f4d13ada3e/userSecurity/ldap/verify POST: HTTP 400 Bad Request (Error code: "LDAP_HOSTNAME_NOT_ALLOWED") Detail: The LDAP hostname *** is not allowed. Reason: Bad Request. Params: [***], BadRequestDetail: 
2026-07-10T01:24:09.8372874Z         
2026-07-10T01:24:09.8373484Z           with mongodbatlas_ldap_verify.test,
2026-07-10T01:24:09.8374249Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_ldap_verify" "test":
2026-07-10T01:24:09.8374966Z           14: 		resource "mongodbatlas_ldap_verify" "test" {
2026-07-10T01:24:09.8375384Z         
2026-07-10T01:24:09.8375715Z --- FAIL: TestMigLDAPVerify_basic (1443.83s)
```

- 2026-07-11: MISSING
- 2026-07-12: MISSING
- 2026-07-13

### Error 2026-07-13T01:03:27+00:00
```
2026-07-13T01:03:27.6279274Z === RUN   TestMigLDAPVerify_basic
2026-07-13T01:03:27.6280480Z     resource_ldap_verify_migration_test.go:10: Creating execution project (1): test-acc-tf-p-4369991312361956082
2026-07-13T01:03:27.6282170Z     resource_ldap_verify_migration_test.go:10: Creating execution cluster: test-acc-tf-c-4042532890556445853
2026-07-13T01:03:27.6283248Z 2026/07/13 00:46:41 [DEBUG] Waiting for state to become: [IDLE]
2026-07-13T01:03:27.6284034Z 2026/07/13 00:49:41 [TRACE] Waiting 1m0s before next try
2026-07-13T01:03:27.6284932Z 2026/07/13 00:50:42 [TRACE] Waiting 10s before next try
2026-07-13T01:03:27.6285652Z 2026/07/13 00:50:52 [TRACE] Waiting 1m0s before next try
2026-07-13T01:03:27.6286374Z 2026/07/13 00:51:52 [TRACE] Waiting 10s before next try
2026-07-13T01:03:27.6287083Z 2026/07/13 00:52:02 [TRACE] Waiting 1m0s before next try
2026-07-13T01:03:27.6287797Z 2026/07/13 00:53:02 [TRACE] Waiting 10s before next try
2026-07-13T01:03:27.6288491Z 2026/07/13 00:53:13 [TRACE] Waiting 1m0s before next try
2026-07-13T01:03:27.6289204Z 2026/07/13 00:54:13 [TRACE] Waiting 10s before next try
2026-07-13T01:03:27.6289907Z 2026/07/13 00:54:23 [TRACE] Waiting 1m0s before next try
2026-07-13T01:03:27.6290612Z 2026/07/13 00:55:23 [TRACE] Waiting 10s before next try
2026-07-13T01:03:27.6291309Z 2026/07/13 00:55:33 [TRACE] Waiting 1m0s before next try
2026-07-13T01:03:27.6292003Z 2026/07/13 00:56:34 [TRACE] Waiting 10s before next try
2026-07-13T01:03:27.6292728Z 2026/07/13 00:56:44 [TRACE] Waiting 1m0s before next try
2026-07-13T01:03:27.6293427Z 2026/07/13 00:57:44 [TRACE] Waiting 10s before next try
2026-07-13T01:03:27.6294121Z 2026/07/13 00:57:54 [TRACE] Waiting 1m0s before next try
2026-07-13T01:03:27.6294982Z 2026/07/13 00:58:54 [TRACE] Waiting 10s before next try
2026-07-13T01:03:27.6295679Z 2026/07/13 00:59:05 [TRACE] Waiting 1m0s before next try
2026-07-13T01:03:27.6372680Z === CONT  TestMigLDAPVerify_basic
2026-07-13T01:03:27.6382274Z    test_name=TestMigLDAPVerify_basic test_terraform_path=/home/runner/work/_temp/f4d1d92a-f1f1-42ae-888b-a4f1ba0bd27e/terraform test_working_directory=/tmp/plugintest3775536070 test_step_number=1
2026-07-13T01:03:27.6383591Z     resource_ldap_verify_migration_test.go:10: Step 1/2 error: Error running apply: exit status 1
2026-07-13T01:03:27.6384174Z         
2026-07-13T01:03:27.6386921Z         Error: error creating MongoDB LDAPVerify (6a54356da3b75f3f044928b7): https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a54356da3b75f3f044928b7/userSecurity/ldap/verify POST: HTTP 400 Bad Request (Error code: "LDAP_HOSTNAME_NOT_ALLOWED") Detail: The LDAP hostname *** is not allowed. Reason: Bad Request. Params: [***], BadRequestDetail: 
2026-07-13T01:03:27.6388289Z         
2026-07-13T01:03:27.6388733Z           with mongodbatlas_ldap_verify.test,
2026-07-13T01:03:27.6389635Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_ldap_verify" "test":
2026-07-13T01:03:27.6390368Z           14: 		resource "mongodbatlas_ldap_verify" "test" {
2026-07-13T01:03:27.6390815Z         
2026-07-13T01:03:27.6391161Z --- FAIL: TestMigLDAPVerify_basic (809.47s)
```

- 2026-07-14: MISSING
- 2026-07-15 PASS 15 minutes
- 2026-07-16: MISSING
- 2026-07-17 PASS 16 minutes
- 2026-07-18: MISSING
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22 PASS 15 minutes
- 2026-07-23: MISSING
- 2026-07-24 PASS 24 minutes
- 2026-07-25: MISSING
- 2026-07-26: MISSING
- 2026-07-27 PASS 55 minutes
- 2026-07-28: MISSING
- 2026-07-29 PASS 16 minutes
- 2026-07-30: MISSING
- 2026-07-31 PASS 16 minutes
- 2026-08-01: MISSING
- 2026-08-02: MISSING
- 2026-08-03 PASS 16 minutes
- 2026-08-04: MISSING
- 2026-08-05 PASS 15 minutes
- 2026-08-06: MISSING
- 2026-08-07 PASS 16 minutes

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-12 01:06](#error-2026-07-12t0106030000) | LDAP_HOSTNAME_NOT_ALLOWED /api/atlas/v2/groups/6a52e45354924de0baf4a912/userSecurity/ldap/verify | qa |  | 810.00s
[2026-07-15 07:40](#error-2026-07-15t0740130000) | LDAP_HOSTNAME_NOT_ALLOWED /api/atlas/v2/groups/6a57358293daee1cb09fd430/userSecurity/ldap/verify | qa | flaky_500 | 812.08s
[2026-07-15 09:47](#error-2026-07-15t0947540000) | LDAP_HOSTNAME_NOT_ALLOWED /api/atlas/v2/groups/6a5753ae8f62f9b412918db2/userSecurity/ldap/verify | qa |  | 740.08s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12

### Error 2026-07-12T01:06:03+00:00
```
2026-07-12T01:06:03.5240141Z === RUN   TestMigLDAPVerify_basic
2026-07-12T01:06:03.5241476Z     resource_ldap_verify_migration_test.go:10: Creating execution project (1): test-acc-tf-p-7219180007099485387
2026-07-12T01:06:03.5243597Z     resource_ldap_verify_migration_test.go:10: Creating execution cluster: test-acc-tf-c-4111253378674731112
2026-07-12T01:06:03.5244858Z 2026/07/12 00:48:23 [DEBUG] Waiting for state to become: [IDLE]
2026-07-12T01:06:03.5245711Z 2026/07/12 00:51:23 [TRACE] Waiting 1m0s before next try
2026-07-12T01:06:03.5246492Z 2026/07/12 00:52:23 [TRACE] Waiting 10s before next try
2026-07-12T01:06:03.5247404Z 2026/07/12 00:52:34 [TRACE] Waiting 1m0s before next try
2026-07-12T01:06:03.5248336Z 2026/07/12 00:53:34 [TRACE] Waiting 10s before next try
2026-07-12T01:06:03.5249243Z 2026/07/12 00:53:44 [TRACE] Waiting 1m0s before next try
2026-07-12T01:06:03.5250234Z 2026/07/12 00:54:44 [TRACE] Waiting 10s before next try
2026-07-12T01:06:03.5251128Z 2026/07/12 00:54:54 [TRACE] Waiting 1m0s before next try
2026-07-12T01:06:03.5252051Z 2026/07/12 00:55:55 [TRACE] Waiting 10s before next try
2026-07-12T01:06:03.5253047Z 2026/07/12 00:56:05 [TRACE] Waiting 1m0s before next try
2026-07-12T01:06:03.5254256Z 2026/07/12 00:57:05 [TRACE] Waiting 10s before next try
2026-07-12T01:06:03.5255247Z 2026/07/12 00:57:15 [TRACE] Waiting 1m0s before next try
2026-07-12T01:06:03.5256180Z 2026/07/12 00:58:16 [TRACE] Waiting 10s before next try
2026-07-12T01:06:03.5257094Z 2026/07/12 00:58:26 [TRACE] Waiting 1m0s before next try
2026-07-12T01:06:03.5258017Z 2026/07/12 00:59:26 [TRACE] Waiting 10s before next try
2026-07-12T01:06:03.5258970Z 2026/07/12 00:59:36 [TRACE] Waiting 1m0s before next try
2026-07-12T01:06:03.5259942Z 2026/07/12 01:00:36 [TRACE] Waiting 10s before next try
2026-07-12T01:06:03.5260914Z 2026/07/12 01:00:47 [TRACE] Waiting 1m0s before next try
2026-07-12T01:06:03.5332923Z === CONT  TestMigLDAPVerify_basic
2026-07-12T01:06:03.5342923Z    test_name=TestMigLDAPVerify_basic test_terraform_path=/home/runner/work/_temp/bd127272-4f7b-4cb7-81cc-0d2be467c73e/terraform test_working_directory=/tmp/plugintest1292706573 test_step_number=1
2026-07-12T01:06:03.5344441Z     resource_ldap_verify_migration_test.go:10: Step 1/2 error: Error running apply: exit status 1
2026-07-12T01:06:03.5345021Z         
2026-07-12T01:06:03.5347707Z         Error: error creating MongoDB LDAPVerify (6a52e45354924de0baf4a912): https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a52e45354924de0baf4a912/userSecurity/ldap/verify POST: HTTP 400 Bad Request (Error code: "LDAP_HOSTNAME_NOT_ALLOWED") Detail: The LDAP hostname *** is not allowed. Reason: Bad Request. Params: [***], BadRequestDetail: 
2026-07-12T01:06:03.5350330Z         
2026-07-12T01:06:03.5351080Z           with mongodbatlas_ldap_verify.test,
2026-07-12T01:06:03.5352485Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_ldap_verify" "test":
2026-07-12T01:06:03.5354108Z           14: 		resource "mongodbatlas_ldap_verify" "test" {
2026-07-12T01:06:03.5354879Z         
2026-07-12T01:06:03.5355458Z --- FAIL: TestMigLDAPVerify_basic (810.05s)
```

- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - FAIL 13 minutes

### Error 2026-07-15T07:40:13+00:00
```
2026-07-15T07:40:13.7848373Z === RUN   TestMigLDAPVerify_basic
2026-07-15T07:40:13.7849841Z     resource_ldap_verify_migration_test.go:10: Creating execution project (1): test-acc-tf-p-8739442386918165447
2026-07-15T07:40:13.7851462Z     resource_ldap_verify_migration_test.go:10: Creating execution cluster: test-acc-tf-c-892462353804819917
2026-07-15T07:40:13.7852507Z 2026/07/15 07:23:50 [DEBUG] Waiting for state to become: [IDLE]
2026-07-15T07:40:13.7853213Z 2026/07/15 07:26:50 [TRACE] Waiting 1m0s before next try
2026-07-15T07:40:13.7853880Z 2026/07/15 07:27:51 [TRACE] Waiting 10s before next try
2026-07-15T07:40:13.7854529Z 2026/07/15 07:28:01 [TRACE] Waiting 1m0s before next try
2026-07-15T07:40:13.7855228Z 2026/07/15 07:29:01 [TRACE] Waiting 10s before next try
2026-07-15T07:40:13.7856047Z 2026/07/15 07:29:12 [TRACE] Waiting 1m0s before next try
2026-07-15T07:40:13.7856712Z 2026/07/15 07:30:12 [TRACE] Waiting 10s before next try
2026-07-15T07:40:13.7857353Z 2026/07/15 07:30:22 [TRACE] Waiting 1m0s before next try
2026-07-15T07:40:13.7857968Z 2026/07/15 07:31:23 [TRACE] Waiting 10s before next try
2026-07-15T07:40:13.7858578Z 2026/07/15 07:31:33 [TRACE] Waiting 1m0s before next try
2026-07-15T07:40:13.7859238Z 2026/07/15 07:32:33 [TRACE] Waiting 10s before next try
2026-07-15T07:40:13.7859854Z 2026/07/15 07:32:44 [TRACE] Waiting 1m0s before next try
2026-07-15T07:40:13.7860468Z 2026/07/15 07:33:44 [TRACE] Waiting 10s before next try
2026-07-15T07:40:13.7861101Z 2026/07/15 07:33:54 [TRACE] Waiting 1m0s before next try
2026-07-15T07:40:13.7861725Z 2026/07/15 07:34:55 [TRACE] Waiting 10s before next try
2026-07-15T07:40:13.7862348Z 2026/07/15 07:35:05 [TRACE] Waiting 1m0s before next try
2026-07-15T07:40:13.7862994Z 2026/07/15 07:36:06 [TRACE] Waiting 10s before next try
2026-07-15T07:40:13.7863592Z 2026/07/15 07:36:16 [TRACE] Waiting 1m0s before next try
2026-07-15T07:40:13.7927623Z === CONT  TestMigLDAPVerify_basic
2026-07-15T07:40:13.7939352Z    test_name=TestMigLDAPVerify_basic
2026-07-15T07:40:13.7940282Z     resource_ldap_verify_migration_test.go:10: Step 1/2 error: Error running apply: exit status 1
2026-07-15T07:40:13.7941043Z         
2026-07-15T07:40:13.7944359Z         Error: error creating MongoDB LDAPVerify (6a57358293daee1cb09fd430): https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a57358293daee1cb09fd430/userSecurity/ldap/verify POST: HTTP 400 Bad Request (Error code: "LDAP_HOSTNAME_NOT_ALLOWED") Detail: The LDAP hostname *** is not allowed. Reason: Bad Request. Params: [***], BadRequestDetail: 
2026-07-15T07:40:13.7946336Z         
2026-07-15T07:40:13.7946933Z           with mongodbatlas_ldap_verify.test,
2026-07-15T07:40:13.7947997Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_ldap_verify" "test":
2026-07-15T07:40:13.7948993Z           14: 		resource "mongodbatlas_ldap_verify" "test" {
2026-07-15T07:40:13.7949591Z         
2026-07-15T07:40:13.7950038Z --- FAIL: TestMigLDAPVerify_basic (812.81s)
```

  - FAIL 12 minutes

### Error 2026-07-15T09:47:54+00:00
```
2026-07-15T09:47:54.5882826Z === RUN   TestMigLDAPVerify_basic
2026-07-15T09:47:54.5883586Z     resource_ldap_verify_migration_test.go:10: Creating execution project (1): test-acc-tf-p-3655364100801410062
2026-07-15T09:47:54.5884569Z     resource_ldap_verify_migration_test.go:10: Creating execution cluster: test-acc-tf-c-8324287588804279316
2026-07-15T09:47:54.5885248Z 2026/07/15 09:32:34 [DEBUG] Waiting for state to become: [IDLE]
2026-07-15T09:47:54.5885767Z 2026/07/15 09:35:34 [TRACE] Waiting 1m0s before next try
2026-07-15T09:47:54.5886255Z 2026/07/15 09:36:34 [TRACE] Waiting 10s before next try
2026-07-15T09:47:54.5886717Z 2026/07/15 09:36:45 [TRACE] Waiting 1m0s before next try
2026-07-15T09:47:54.5887186Z 2026/07/15 09:37:45 [TRACE] Waiting 10s before next try
2026-07-15T09:47:54.5887634Z 2026/07/15 09:37:55 [TRACE] Waiting 1m0s before next try
2026-07-15T09:47:54.5888081Z 2026/07/15 09:38:55 [TRACE] Waiting 10s before next try
2026-07-15T09:47:54.5888525Z 2026/07/15 09:39:06 [TRACE] Waiting 1m0s before next try
2026-07-15T09:47:54.5888979Z 2026/07/15 09:40:06 [TRACE] Waiting 10s before next try
2026-07-15T09:47:54.5889422Z 2026/07/15 09:40:16 [TRACE] Waiting 1m0s before next try
2026-07-15T09:47:54.5889871Z 2026/07/15 09:41:17 [TRACE] Waiting 10s before next try
2026-07-15T09:47:54.5890311Z 2026/07/15 09:41:27 [TRACE] Waiting 1m0s before next try
2026-07-15T09:47:54.5890942Z 2026/07/15 09:42:27 [TRACE] Waiting 10s before next try
2026-07-15T09:47:54.5891386Z 2026/07/15 09:42:37 [TRACE] Waiting 1m0s before next try
2026-07-15T09:47:54.5891836Z 2026/07/15 09:43:38 [TRACE] Waiting 10s before next try
2026-07-15T09:47:54.5892272Z 2026/07/15 09:43:48 [TRACE] Waiting 1m0s before next try
2026-07-15T09:47:54.5939350Z === CONT  TestMigLDAPVerify_basic
2026-07-15T09:47:54.5957613Z    test_name=TestMigLDAPVerify_basic test_terraform_path=/home/runner/work/_temp/29ea9546-50ab-4f02-a929-f792ea8ffe9c/terraform
2026-07-15T09:47:54.5958640Z     resource_ldap_verify_migration_test.go:10: Step 1/2 error: Error running apply: exit status 1
2026-07-15T09:47:54.5959232Z         
2026-07-15T09:47:54.5961949Z         Error: error creating MongoDB LDAPVerify (6a5753ae8f62f9b412918db2): https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a5753ae8f62f9b412918db2/userSecurity/ldap/verify POST: HTTP 400 Bad Request (Error code: "LDAP_HOSTNAME_NOT_ALLOWED") Detail: The LDAP hostname *** is not allowed. Reason: Bad Request. Params: [***], BadRequestDetail: 
2026-07-15T09:47:54.5963338Z         
2026-07-15T09:47:54.5963783Z           with mongodbatlas_ldap_verify.test,
2026-07-15T09:47:54.5964555Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_ldap_verify" "test":
2026-07-15T09:47:54.5965300Z           14: 		resource "mongodbatlas_ldap_verify" "test" {
2026-07-15T09:47:54.5965746Z         
2026-07-15T09:47:54.5966097Z --- FAIL: TestMigLDAPVerify_basic (740.78s)
```

- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 15 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 17 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29 PASS 16 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 16 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
