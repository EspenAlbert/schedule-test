# ldap/ldapconfiguration/TestAccLDAPConfiguration_withVerify_CACertificateComplete Test Details
# Found 34 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 28) FAIL(x 6)
Success rate: 82.35%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-08-10 00:48](#error-2026-08-10t0048230000) | CheckFailure for ldap_verify.test at Step: 1 Checks: 7,8,10,11,12,13,14,15,16,17,18 | dev | 1184.04s
[2026-08-24 00:39](#error-2026-08-24t0039480000) | CheckFailure for ldap_verify.test at Step: 1 Checks: 7,8,10,11,12,13,14,15,16,17,18 | dev | 1098.05s
[2026-08-27 11:32](#error-2026-08-27t1132440000) | CheckFailure for ldap_verify.test at Step: 1 Checks: 7,8,10,11,12,13,14,15,16,17,18 | dev | 1189.06s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 18 minutes
- 2026-08-07 PASS 18 minutes
- 2026-08-08 PASS 19 minutes
- 2026-08-09: MISSING
- 2026-08-10

### Error 2026-08-10T00:48:23+00:00
```
2026-08-10T00:48:23.7299869Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2026-08-10T00:48:23.7311864Z    test_step_number=1 test_name=TestAccLDAPConfiguration_withVerify_CACertificateComplete test_terraform_path=/home/runner/work/_temp/9a852ca5-858c-49c7-be85-c03ab553af49/terraform test_working_directory=/tmp/plugintest1216778573
2026-08-10T00:48:23.7313675Z     resource_ldap_configuration_test.go:43: Step 1/1 error: Check failed: Check 7/18 error: mongodbatlas_ldap_verify.test: Attribute 'status' expected "SUCCESS", got "FAILED"
2026-08-10T00:48:23.7314858Z         Check 8/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.#' expected "5", got "1"
2026-08-10T00:48:23.7316480Z         Check 10/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.0.status' expected "OK", got "FAIL"
2026-08-10T00:48:23.7317538Z         Check 11/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.1.validation_type' not found
2026-08-10T00:48:23.7318504Z         Check 12/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.1.status' not found
2026-08-10T00:48:23.7319474Z         Check 13/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.2.validation_type' not found
2026-08-10T00:48:23.7320421Z         Check 14/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.2.status' not found
2026-08-10T00:48:23.7321376Z         Check 15/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.3.validation_type' not found
2026-08-10T00:48:23.7322311Z         Check 16/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.3.status' not found
2026-08-10T00:48:23.7323266Z         Check 17/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.4.validation_type' not found
2026-08-10T00:48:23.7324208Z         Check 18/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.4.status' not found
2026-08-10T00:48:23.7324924Z --- FAIL: TestAccLDAPConfiguration_withVerify_CACertificateComplete (1184.35s)
```

- 2026-08-11 PASS 19 minutes
- 2026-08-12 PASS 19 minutes
- 2026-08-13 PASS 18 minutes
- 2026-08-14 PASS 18 minutes
- 2026-08-15 PASS 17 minutes
- 2026-08-16: MISSING
- 2026-08-17 PASS 19 minutes
- 2026-08-18 PASS 18 minutes
- 2026-08-19 PASS 19 minutes
- 2026-08-20 PASS 18 minutes
- 2026-08-21 PASS 19 minutes
- 2026-08-22 PASS 17 minutes
- 2026-08-23: MISSING
- 2026-08-24

### Error 2026-08-24T00:39:48+00:00
```
2026-08-24T00:39:48.9263146Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2026-08-24T00:39:48.9273619Z    test_name=TestAccLDAPConfiguration_withVerify_CACertificateComplete test_terraform_path=/home/runner/work/_temp/70e5ade6-9682-4c59-a862-41d39473f330/terraform test_working_directory=/tmp/plugintest773233082
2026-08-24T00:39:48.9279031Z     resource_ldap_configuration_test.go:43: Step 1/1 error: Check failed: Check 7/18 error: mongodbatlas_ldap_verify.test: Attribute 'status' expected "SUCCESS", got "FAILED"
2026-08-24T00:39:48.9280763Z         Check 8/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.#' expected "5", got "1"
2026-08-24T00:39:48.9281673Z         Check 10/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.0.status' expected "OK", got "FAIL"
2026-08-24T00:39:48.9282554Z         Check 11/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.1.validation_type' not found
2026-08-24T00:39:48.9283408Z         Check 12/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.1.status' not found
2026-08-24T00:39:48.9284199Z         Check 13/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.2.validation_type' not found
2026-08-24T00:39:48.9285019Z         Check 14/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.2.status' not found
2026-08-24T00:39:48.9285833Z         Check 15/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.3.validation_type' not found
2026-08-24T00:39:48.9286589Z         Check 16/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.3.status' not found
2026-08-24T00:39:48.9287390Z         Check 17/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.4.validation_type' not found
2026-08-24T00:39:48.9288193Z         Check 18/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.4.status' not found
2026-08-24T00:39:48.9288946Z --- FAIL: TestAccLDAPConfiguration_withVerify_CACertificateComplete (1098.48s)
```

- 2026-08-25 PASS 18 minutes
- 2026-08-26 PASS 18 minutes
- 2026-08-27
  - PASS 19 minutes
  - FAIL 19 minutes

### Error 2026-08-27T11:32:44+00:00
```
2026-08-27T11:32:44.4009316Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2026-08-27T11:32:44.4012508Z     resource_ldap_configuration_test.go:33: Creating execution project (1): test-acc-tf-p-5523295340976954061
2026-08-27T11:32:44.4035115Z    test_terraform_path=/home/runner/work/_temp/12c717df-359b-4184-93ec-d535db598dda/terraform test_working_directory=/tmp/plugintest644518173 test_step_number=1
2026-08-27T11:32:44.4037710Z     resource_ldap_configuration_test.go:43: Step 1/1 error: Check failed: Check 7/18 error: mongodbatlas_ldap_verify.test: Attribute 'status' expected "SUCCESS", got "FAILED"
2026-08-27T11:32:44.4040127Z         Check 8/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.#' expected "5", got "1"
2026-08-27T11:32:44.4041975Z         Check 10/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.0.status' expected "OK", got "FAIL"
2026-08-27T11:32:44.4043819Z         Check 11/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.1.validation_type' not found
2026-08-27T11:32:44.4045786Z         Check 12/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.1.status' not found
2026-08-27T11:32:44.4047564Z         Check 13/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.2.validation_type' not found
2026-08-27T11:32:44.4049349Z         Check 14/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.2.status' not found
2026-08-27T11:32:44.4051099Z         Check 15/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.3.validation_type' not found
2026-08-27T11:32:44.4052832Z         Check 16/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.3.status' not found
2026-08-27T11:32:44.4055100Z         Check 17/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.4.validation_type' not found
2026-08-27T11:32:44.4056879Z         Check 18/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.4.status' not found
2026-08-27T11:32:44.4058165Z --- FAIL: TestAccLDAPConfiguration_withVerify_CACertificateComplete (1189.55s)
```

- 2026-08-28 PASS 20 minutes
- 2026-08-29 PASS 22 minutes
- 2026-08-30: MISSING
- 2026-08-31 PASS 21 minutes
- 2026-09-01 PASS 20 minutes
- 2026-09-02 PASS 18 minutes
- 2026-09-03 PASS 19 minutes
- 2026-09-04
  - PASS 26 minutes
  - PASS 19 minutes

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-08-23 00:41](#error-2026-08-23t0041180000) | CheckFailure for ldap_verify.test at Step: 1 Checks: 7,8,10,11,12,13,14,15,16,17,18 | qa | 1154.10s
[2026-08-27 08:48](#error-2026-08-27t0848170000) | CheckFailure for ldap_verify.test at Step: 1 Checks: 7,8,10,11,12,13,14,15,16,17,18 | qa | 1222.01s
[2026-08-30 01:06](#error-2026-08-30t0106020000) | CheckFailure for ldap_verify.test at Step: 1 Checks: 7,8,10,11,12,13,14,15,16,17,18 | qa | 1186.06s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09 PASS 19 minutes
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13 PASS 18 minutes
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16 PASS 19 minutes
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23

### Error 2026-08-23T00:41:18+00:00
```
2026-08-23T00:41:18.3183820Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2026-08-23T00:41:18.3200605Z   
2026-08-23T00:41:18.3201717Z     resource_ldap_configuration_test.go:43: Step 1/1 error: Check failed: Check 7/18 error: mongodbatlas_ldap_verify.test: Attribute 'status' expected "SUCCESS", got "FAILED"
2026-08-23T00:41:18.3203495Z         Check 8/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.#' expected "5", got "1"
2026-08-23T00:41:18.3204892Z         Check 10/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.0.status' expected "OK", got "FAIL"
2026-08-23T00:41:18.3206101Z         Check 11/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.1.validation_type' not found
2026-08-23T00:41:18.3207160Z         Check 12/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.1.status' not found
2026-08-23T00:41:18.3208239Z         Check 13/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.2.validation_type' not found
2026-08-23T00:41:18.3209290Z         Check 14/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.2.status' not found
2026-08-23T00:41:18.3210363Z         Check 15/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.3.validation_type' not found
2026-08-23T00:41:18.3211411Z         Check 16/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.3.status' not found
2026-08-23T00:41:18.3212483Z         Check 17/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.4.validation_type' not found
2026-08-23T00:41:18.3213529Z         Check 18/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.4.status' not found
2026-08-23T00:41:18.3214616Z --- FAIL: TestAccLDAPConfiguration_withVerify_CACertificateComplete (1154.97s)
```

- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27

### Error 2026-08-27T08:48:17+00:00
```
2026-08-27T08:48:17.5030973Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2026-08-27T08:48:17.5046277Z   
2026-08-27T08:48:17.5047849Z     resource_ldap_configuration_test.go:43: Step 1/1 error: Check failed: Check 7/18 error: mongodbatlas_ldap_verify.test: Attribute 'status' expected "SUCCESS", got "FAILED"
2026-08-27T08:48:17.5049010Z         Check 8/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.#' expected "5", got "1"
2026-08-27T08:48:17.5050011Z         Check 10/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.0.status' expected "OK", got "FAIL"
2026-08-27T08:48:17.5051354Z         Check 11/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.1.validation_type' not found
2026-08-27T08:48:17.5052270Z         Check 12/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.1.status' not found
2026-08-27T08:48:17.5053228Z         Check 13/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.2.validation_type' not found
2026-08-27T08:48:17.5054197Z         Check 14/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.2.status' not found
2026-08-27T08:48:17.5055134Z         Check 15/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.3.validation_type' not found
2026-08-27T08:48:17.5056060Z         Check 16/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.3.status' not found
2026-08-27T08:48:17.5056988Z         Check 17/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.4.validation_type' not found
2026-08-27T08:48:17.5057885Z         Check 18/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.4.status' not found
2026-08-27T08:48:17.5058877Z --- FAIL: TestAccLDAPConfiguration_withVerify_CACertificateComplete (1222.10s)
```

- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30

### Error 2026-08-30T01:06:02+00:00
```
2026-08-30T01:06:02.6037463Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2026-08-30T01:06:02.6058473Z    test_name=TestAccLDAPConfiguration_withVerify_CACertificateComplete test_terraform_path=/home/runner/work/_temp/a4ab5bfa-4ddf-46b5-95ca-154690f60195/terraform
2026-08-30T01:06:02.6060007Z     resource_ldap_configuration_test.go:43: Step 1/1 error: Check failed: Check 7/18 error: mongodbatlas_ldap_verify.test: Attribute 'status' expected "SUCCESS", got "FAILED"
2026-08-30T01:06:02.6061577Z         Check 8/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.#' expected "5", got "1"
2026-08-30T01:06:02.6062935Z         Check 10/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.0.status' expected "OK", got "FAIL"
2026-08-30T01:06:02.6064026Z         Check 11/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.1.validation_type' not found
2026-08-30T01:06:02.6065011Z         Check 12/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.1.status' not found
2026-08-30T01:06:02.6066014Z         Check 13/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.2.validation_type' not found
2026-08-30T01:06:02.6066980Z         Check 14/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.2.status' not found
2026-08-30T01:06:02.6067972Z         Check 15/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.3.validation_type' not found
2026-08-30T01:06:02.6068951Z         Check 16/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.3.status' not found
2026-08-30T01:06:02.6069936Z         Check 17/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.4.validation_type' not found
2026-08-30T01:06:02.6070900Z         Check 18/18 error: mongodbatlas_ldap_verify.test: Attribute 'validations.4.status' not found
2026-08-30T01:06:02.6071799Z --- FAIL: TestAccLDAPConfiguration_withVerify_CACertificateComplete (1186.62s)
```

- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
