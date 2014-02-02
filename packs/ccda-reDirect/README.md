# SMART reDirect

## A simple service to:
 1. Listen for incoming messages on a Direct server
 2. Identify C-CCDA attachments, and
 3. Forward them to a specified address.

This is a quick hack and a useful bridge.  Currently relies on the Direct Java
Reference Implemenation version 2.1, with the `IncomingMessageSaveFolder` debug
setting enabled.  It works by monitoring a directory for new (e-mail) files.

Run it with three variables (passed via the command line, or as environment variables):

* Source Directory (local dir where new e-mail files appear): `--source_dir` or `export SOURCE_DIR`
* Progress Directory (local dir where progress can be recorded): `--progress_dir` or `export PROGRESS_DIR`
* CCDA POST URL ( URL template to which files should be posted): `--ccda_post_url` or `export CCDA_POST_URL`

Note: the CCDA POST URL can use the following template variables: `from`, `to`.
For example, if you want to process C-CDAs based on the recipient (`to`)
address, you can use a CCDA POST URL like
`http://my-server.com/incoming/ccda/for-user/{to}`.

---

This is designed to run in the context of the Direct Java Reference
Implementation.  You can install the whole shebang
automatically with [ansible](http://ansible.cc):

https://github.com/jmandel/ansible-ccda
